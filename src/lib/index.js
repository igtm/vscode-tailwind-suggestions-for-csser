import { corePlugins } from "./corePlugins.js";
import config from "./config.full.js";
import fs from "fs";
import { paramCase } from "change-case";

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
        return config.theme;
      },
      addComponents: (name, flag) => {
        // TODO: hoge
      },
      matchUtilities: (obj1, obj2) => {
        // TODO: hoge
        Object.entries(obj1).map(([classPrefix, property]) => {
          const temp = obj1[classPrefix]("HOGE", { modifier: "mod" });
          Object.keys(temp).forEach((k) => {
            if (obj2) {
              let modifierCSSMap = {};
              // function or object
              if (typeof obj2.values[k] === "function") {
                modifierCSSMap = obj2.values[k]({
                  theme: () => ({}),
                  breakpoints: () => ({}),
                });
              }
              if (typeof obj2.values[k] === "object") {
                modifierCSSMap = obj2.values[k];
              }
              Object.entries(modifierCSSMap).map(([modifier, cssValue]) => {
                ret[`${classPrefix}-${modifier}`] = {
                  [paramCase(k)]: cssValue,
                };
                fs.writeFileSync(
                  "./output1.json",
                  JSON.stringify(ret, null, 2)
                );
              });
            }
          });
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
