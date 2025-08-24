const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { styleRegex, styleModuleRegex } = require('./constants.js');

module.exports = {
  output: {
    // path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    // publicPath: 'auto',
    // filename: 'build.[contenthash].js',
    // clean: true,
  },

  mode: 'development',
  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: styleModuleRegex,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                exportLocalsConvention: 'as-is',
                namedExport: false,
                mode: 'local',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: styleRegex,
        exclude: styleModuleRegex,
        sideEffects: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                exportLocalsConvention: 'as-is',
                namedExport: false,
                mode: 'icss',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],

  devServer: {
    port: 3300,
    historyApiFallback: true,
    hot: true,
    open: true,

    client: {
      overlay: {
        errors: true,
      },
    },
  },
};
