const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {

  entry: {
    'react-appear-in': path.join(PATHS.src, 'react-appear-in.tsx'),
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals : {
    react: 'react'
  },
}
