import path from 'path';
import webpack from 'webpack';

const buildTimestamp = Date.now();
const nodeEnv = process.env.NODE_ENV;
const isDevelopmentMode = nodeEnv !== 'production';
const nodePaths = (process.env.NODE_PATH || '').split(':').map(p => path.resolve(p));

const options = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  resolve: {
    modules: [...nodePaths]
  },
  module: {
    rules: [
      {
        exclude: [
          /(node_modules|target)/,
          /src\/lib\/bundle/
        ],
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin((() => {
      const env = {
        IS_DEVELOPMENT_MODE: isDevelopmentMode,
        BUILD_TIMESTAMP: buildTimestamp,
        NODE_ENV: nodeEnv
      };
      return {
        'process.env': Object.keys(env).reduce(
          (acc, k) => ({...acc, [k]: JSON.stringify(env[k])}), {}
        )
      };
    })())
  ],
  devServer: {
    host: '0.0.0.0',
    port: '8081'
  }
};

export default options;
