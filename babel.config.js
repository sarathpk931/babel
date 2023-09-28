module.exports = function (api) {
    api.cache(true); // Enable Babel's caching mechanism for improved build performance.
  
    const presets = [
      "@babel/preset-env",
      "@babel/preset-typescript",
    ];
  
    const plugins = [
      ["@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true }],
      "@babel/plugin-proposal-class-properties",
    ];
  
    return {
      presets,
      plugins,
    };
  };
  