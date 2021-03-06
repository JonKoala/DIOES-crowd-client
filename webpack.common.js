const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const webpack = require('webpack')


module.exports = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.resolve(__dirname, './src/components'),
      'services': path.resolve(__dirname, './src/services'),
      'store': path.resolve(__dirname, './src/store'),
      'views': path.resolve(__dirname, './src/views'),
      '~': __dirname
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: path.resolve(__dirname, './images/favicon.ico')
    }),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'DIARIOBOT_API_URL': JSON.stringify(process.env['DIARIOBOT_API_URL'])
      }
    })
  ]
}
