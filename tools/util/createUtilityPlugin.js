import transformThemeValue from './transformThemeValue.js'
import { paramCase } from "change-case";

export default function createUtilityPlugin(
  themeKey,
  utilityVariations = [[themeKey, [themeKey]]],
  { filterDefault = false, ...options } = {}
) {
  let transformValue = transformThemeValue(themeKey)
  return function ({ matchUtilities, theme }) {
    for (let utilityVariation of utilityVariations) {
      let group = Array.isArray(utilityVariation[0]) ? utilityVariation : [utilityVariation]

      // ["col", ["gridColumn"]]
      matchUtilities(
        group.reduce((obj, [classPrefix, properties]) => {
          return Object.assign(obj, {
            [classPrefix]: (value) => {
              return properties.reduce((obj, name) => {
                if (Array.isArray(name)) {
                  return Object.assign(obj, { [paramCase(name[0])]: name[1] })
                }
                return Object.assign(obj, { [paramCase(name)]: transformValue(value) })
              }, {})
            },
          })
        }, {}),
        {
          ...options,
          values: filterDefault
            ? Object.fromEntries(
                Object.entries(theme(themeKey) ?? {}).filter(([modifier]) => modifier !== 'DEFAULT')
              )
            : theme(themeKey),
        }
      )
    }
  }
}
