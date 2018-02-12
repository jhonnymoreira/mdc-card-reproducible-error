const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: [
      './src/app.js',
      './src/app.scss'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  './node_modules/'
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}
