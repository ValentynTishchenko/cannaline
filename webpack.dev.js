const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
  },
});