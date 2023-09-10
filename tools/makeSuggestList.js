import fs from "fs";

// output1 corePluginsに記述してある生の状態
// {'tailwind classname': { 'css properties'...}}

// suggestList.ts: css => tailwind
// {'css property key value': 'tailwind classname' }
const output1 = JSON.parse(fs.readFileSync("./output1.json"));

const suggestList = Object.entries(output1)
  .map(([tailwindClassName, cssObject]) => {
    // 0. pick representive css
    return [
      tailwindClassName,
      [["text-", "font-size"]].reduce((acc, [prefix, props]) => {
        if (
          tailwindClassName.indexOf(prefix) === 0 &&
          Object.keys(acc).find((k) => k === props)
        ) {
          return { [props]: acc[props] };
        }
        return acc;
      }, cssObject),
    ];
  })
  .filter(([tailwindClassName, cssObject]) => {
    // 1. only 1 css properties
    return Object.keys(cssObject).length === 1;
  })
  .filter(([tailwindClassName, cssObject]) => {
    // 2. remove ugly css
    return !["transform-cpu", "transform-gpu", "transform-none"].includes(
      tailwindClassName
    );
  })
  .filter(([tailwindClassName, cssObject]) => {
    // 3. remove custom css variables
    return Object.keys(cssObject).every((c) => c.indexOf("--tw-") === -1);
  })
  .reduce((acc, [tailwindClassName, cssObject]) => {
    Object.entries(cssObject).forEach(([k, v]) => {
      acc[`${k}:${v};`] = tailwindClassName;
    });
    return acc;
  }, {});

fs.writeFileSync(
  "../src/data/suggestList.ts",
  `export const suggestList = ${JSON.stringify(suggestList, null, 2)}`
);
