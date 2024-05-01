// babel.config.compat.cjs
module.exports = function configureBabel(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '20.10.0',
        },
        modules: 'cjs',
      },
    ],
    ['@babel/preset-typescript'],
  ];

  // const plugins = [
  //   [
  //     'babel-plugin-replace-import-extension',
  //     { extMapping: { '.js': '.cjs' } },
  //   ],
  // ];
  return { presets };
};
