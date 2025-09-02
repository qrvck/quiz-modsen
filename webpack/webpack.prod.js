const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { styleRegex, styleModuleRegex } = require('./constants.js');
const deps = require('../package.json').dependencies;

module.exports = {
  output: {
    publicPath: '/',
  },

  mode: 'production',
  devtool: false,

  module: {
    rules: [
      {
        test: styleModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[hash:base64:8]',
                exportLocalsConvention: 'as-is',
                namedExport: false,
                mode: 'local',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },

      {
        test: styleRegex,
        exclude: styleModuleRegex,
        sideEffects: true,
        use: [
          MiniCssExtractPlugin.loader,
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
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote@https://quiz-game-zsoy.onrender.com/remoteEntry.js',
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
