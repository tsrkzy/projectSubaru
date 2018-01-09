const webpack               = require('webpack');
const path                  = require('path');
// const DotEnv                = require('dotenv-webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const config = {
  entry  : {
    lepradius: './src/lepradius.js',
  },
  output : {
    path    : `${__dirname}/js`,
    filename: '[name].bundle.js'
  },
  /*
   * .map.jsファイルを出力(デバッグ用)
   */
  devtool: 'inline-source-map',
  module : {
    loaders: [
      {
        /*
         * デフォルトではnode_modulesを全てbundleしようとするので除外
         */
        exclude: /node_modules/
      }
    ]
  },
  resolve: {},
  plugins: [
    // new DotEnv({
    //   path: `./.env`,
    //   safe: false
    // }),
    new WebpackNotifierPlugin({
      title       : 'Webpack',
      alwaysNotify: true
    })
  ]
};

module.exports = config;
