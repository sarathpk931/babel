module.exports = function (api) {
    api.cache(true); // Enable Babel's caching mechanism for improved build performance.
  
    const presets = [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["last 2 versions", "not ie <= 11"],
          },
          modules: false,
        },
      ],
      "@babel/preset-typescript",
    ];
  
    const plugins = [
      "@babel/plugin-proposal-decorators",
      "@babel/plugin-proposal-class-properties",
    ];
  
    return {
      presets,
      plugins,
    };
  };
  