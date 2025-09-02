const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { moduleFileExtensions } = require('./constants.js');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'build.[contenthash].js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(bmp|ico|png|jpg|jpeg|webp|gif)$/i,
        type: 'asset',
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline',
        generator: {
          filename: 'assets/fonts/[name].[contenthash][ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),

    new ESLintPlugin({
      configType: 'flat',
      extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false,
    }),

    new ForkTsCheckerWebpackPlugin({
      async: false,
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      },
    }),
  ],

  resolve: {
    extensions: moduleFileExtensions,
    plugins: [new TsconfigPathsPlugin()],
  },
};
