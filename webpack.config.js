(() => {
  'use strict';

  const path = require('path');
  const webpack = require('webpack');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  const resolveDir = subpath => path.resolve(__dirname, subpath);

  const config = {
    mode: 'development',

    watch: true,
    watchOptions: {
      ignored: /node_modules/,
    },

    entry: ['./client/src/index.tsx'],

    devtool: 'source-map',

    output: {
      filename: 'sol.min.js',
      publicPath: '',
      path: resolveDir('client/www'),
    },

    devServer: {
      port: 4345,
      historyApiFallback: true,
      inline: true,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
      modules: [resolveDir('node_modules'), resolveDir('client/src')],
      alias: {
        ps: resolveDir('client/src'),
        scss: resolveDir('client/src/scss-common'),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
          // include: path.resolve(__dirname, 'client/src'),
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
          // include: path.resolve(__dirname, 'client/src'),
        },
        {
          test: /\.(c|sa|sc)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin(['client/src/index.html'], {}),
      new MiniCssExtractPlugin({
        filename: 'sol.css',
      }),
    ],
  };

  module.exports = config;
})();
