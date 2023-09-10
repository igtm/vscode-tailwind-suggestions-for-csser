export function createUtilityPlugin(name, args1, args2) {
  return function ({ matchUtilities, theme }) {};
}

export function theme(name, flag) {
  return {
    name,
    flag,
  };
}

// featureFlags.js
export let featureFlags = {
  future: [
    "hoverOnlyWhenSupported",
    "respectDefaultRingColorOpacity",
    "disableColorOpacityUtilitiesByDefault",
    "relativeContentPathsByDefault",
    "logicalSiblingUtilities",
  ],
  experimental: [
    "optimizeUniversalDefaults",
    "oxideParser",
    // 'variantGrouping',
  ],
};
let defaults = {
  optimizeUniversalDefaults: false,
  disableColorOpacityUtilitiesByDefault: false,
  relativeContentPathsByDefault: false,
  oxideParser: true,
  logicalSiblingUtilities: false,
};
export function flagEnabled(config, flag) {
  if (featureFlags.future.includes(flag)) {
    return (
      config.future === "all" ||
      (config?.future?.[flag] ?? defaults[flag] ?? false)
    );
  }

  if (featureFlags.experimental.includes(flag)) {
    return (
      config.experimental === "all" ||
      (config?.experimental?.[flag] ?? defaults[flag] ?? false)
    );
  }

  return false;
}
