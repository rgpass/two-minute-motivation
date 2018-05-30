const path = require('path')

const config = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  resolve: {
    // import will auto-check these extensions
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: 'babel-loader' }],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
}

if (process.env.NODE_ENV === 'production') {
  config.entry = './js/ClientApp.jsx'
  config.devtool = false
  config.plugins = []
}

module.exports = config
