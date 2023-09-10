import { corePlugins } from "./corePlugins.js";
import config from "./config.full.js";
import fs from "fs";

const ret = {};
Object.keys(corePlugins).forEach((key) => {
  if (typeof corePlugins[key] === "function") {
    corePlugins[key]({
      addUtilities: (classMap) => {
        // classMap:  {tailwind class name => {css property key: value} }
        Object.keys(classMap).forEach((key) => {
          ret[key.replace(".", "")] = classMap[key];
        });
        fs.writeFileSync("./output1.json", JSON.stringify(ret, null, 2));
      },
      theme: (name, flag) => {
        // TODO: hoge
        // dot nested
        return name.split(".").reduce((acc, n) => {
          return acc[n];
        }, config.theme);
      },
      addComponents: (name, flag) => {
        // TODO: hoge
      },
      matchUtilities: (obj1, obj2) => {
        Object.entries(obj1).map(([classPrefix, property]) => {
          if (obj2) {
            let modifierCSSMap = {};
            // function or object
            if (typeof obj2.values === "function") {
              modifierCSSMap = obj2.values({
                theme: () => ({}),
                breakpoints: () => ({}),
              });
            }
            if (typeof obj2.values === "object") {
              modifierCSSMap = obj2.values;
            }
            Object.entries(modifierCSSMap).map(([modifier, cssValue]) => {
              let className = classPrefix;
              if (modifier !== "DEFAULT") {
                className = `${classPrefix}-${modifier}`;
              }
              const csses = obj1[classPrefix](cssValue, {
                modifier: obj2.modifiers ? obj2.modifiers[modifier] : "MOD",
              });
              ret[className] = csses;
              fs.writeFileSync("./output1.json", JSON.stringify(ret, null, 2));
            });
          }
        });

        return {};

        // gridColumn: createUtilityPlugin("gridColumn", [["col", ["gridColumn"]]])
        // -> { col: [Function: col] }
        // -> col-span-1

        // fs.writeFileSync("./output-match-util.json", JSON.stringify(ret, null, 2));
      },
      addDefaults: (name, flag) => {
        // TODO: hoge
      },
      corePlugins: (name, flag) => {
        // TODO: hoge
      },
      config: (name, flag) => {
        // TODO: hoge
        return {}; // TODO: future
      },
    });
  }
});
