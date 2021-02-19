const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENTRY_FILE = path.resolve(__dirname, 'src', 'assets', 'js', 'main.js');
const OUTPUT_DIR = path.resolve(__dirname, 'src', 'static');

const config = {
  entry: ENTRY_FILE,
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
