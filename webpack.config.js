const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_FILE = path.resolve(__dirname, 'src', 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'src', 'static');

const config = {
  entry: ['@babel/polyfill', ENTRY_FILE],
  output: {
    filename: '[name].js',
    path: OUTPUT_DIR,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // extracts CSS into separate files
          MiniCssExtractPlugin.loader,
          // translates CSS into CommonJS
          'css-loader',
          // add vender prefixes to CSS files using autoprefixer -> options in 'postcss.config.js'
          'postcss-loader',
          // compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = config;

//https://medium.com/@jongmoon.yoon/mocha-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EC%97%90-async-await-%EC%A0%81%EC%9A%A9-%EC%9D%B4%EC%8A%88-8d18f81cb44c
