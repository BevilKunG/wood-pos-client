const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const svgToMiniDataURI = require('mini-svg-data-uri')

rules.push({
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    {
      loader: 'postcss-loader',
    },
  ],
})

rules.push({
  test: /\.svg$/,
  use: [
    {
      loader: 'url-loader',
      options: { generator: (content) => svgToMiniDataURI(content.toString()) },
    },
  ],
})

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
}
