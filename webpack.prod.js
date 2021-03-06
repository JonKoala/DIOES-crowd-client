const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')


module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: '404.html',
      favicon: path.resolve(__dirname, './images/favicon.ico')
    })
  ]
})
