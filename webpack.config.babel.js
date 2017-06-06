import path from 'path';

const options = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
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
