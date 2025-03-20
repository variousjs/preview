module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          browsers: '> 1%',
        },
        // debug: true,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-import',
      {
        libraryName: '@arco-design/web-react',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
        style: 'css',
      },
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@arco-design/web-react/icon',
        libraryDirectory: 'react-icon',
        camel2DashComponentName: false,
      },
      'icon',
    ],
  ],
}
