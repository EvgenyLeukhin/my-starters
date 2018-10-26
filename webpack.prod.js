const merge                   = require('webpack-merge');
const common                  = require('./webpack.config.js');

const HtmlWebpackPlugin       = require('html-webpack-plugin');
const WebpackBar              = require('webpackbar');
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const CompressionPlugin       = require('compression-webpack-plugin');
const FaviconsWebpackPlugin   = require('favicons-webpack-plugin');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const production = {
  mode:    'production',
  output: { filename: 'bundle-[hash:8].js' },

  module: {
    rules: [
      // CSS // with extract-plugin
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // IMG //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name]-[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true }
          }
        ]
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ // min js
        cache: true,
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: { comments: false }
        }
      }),
      new OptimizeCSSAssetsPlugin({}) // min css
    ]
  },

  plugins: [
    new WebpackBar(),

    new CleanWebpackPlugin('public'),

    new CompressionPlugin({ algorithm: 'gzip' }),

    new FaviconsWebpackPlugin({
      logo: './static/img/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      minify: {                                 // min html
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      }
    }),

    new MiniCssExtractPlugin({ filename: 'bundle-[hash:8].css' }), // css bundle

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    }),
  ]
};

module.exports = merge(common, production);
