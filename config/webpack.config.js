const path = require('path');
const SaveAssetsToJsonPlugin = require('./save-assets-to-json.plugin');

const config = require('./site.config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  context: path.join(config.root, config.paths.src),
  entry: [
    path.join(config.root, config.paths.src, 'javascripts/scripts.js'),
    path.join(config.root, config.paths.src, 'stylesheets/styles.scss'),
  ],
  output: {
    path: path.join(config.root, config.paths.dist),
    filename: '[name].[hash].js',
  },
  mode: ['production', 'development'].includes(config.env)
    ? config.env
    : 'development',
  devtool: config.env === 'production'
    ? 'hidden-source-map'
    : 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(config.root, config.paths.src),
    watchContentBase: true,
    hot: true,
    open: true,
    port: config.port,
    host: config.dev_host,
  },
  module: {
    rules: loaders,
  },
  plugins: [
    ...plugins,
    new SaveAssetsToJsonPlugin('assets.json', /^images\//)
  ],
  resolve: {
    modules: ['node_modules'],
    alias: {
      'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
    }
  }
};
