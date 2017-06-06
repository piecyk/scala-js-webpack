import path from 'path';

const options = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolveLoader: {
    alias: {
      'scalajs-loader': path.resolve(__dirname, 'scalajsLoader.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scala$/,
        loader: 'scalajs-loader'
      }
    ]
  }
};

export default options;
