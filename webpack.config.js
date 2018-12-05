const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {

  entry: {
    'react-appear-in': PATHS.src + '/index.ts'
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    library: 'react-appear-in',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  }
}
