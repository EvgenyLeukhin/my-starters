const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/' // where will be bundle in dist
  },
  devServer: {
    contentBase: 'public',
    overlay: true
  },
  module: {
    rules: [
      // JS //
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // HTML //
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-compiled-loader',
            options: {
              'htmlmin': true,
              'htmlminOptions': { removeComments: true }
            }
          }
        ]
      },
      // CSS //
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
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          },
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'img/[name]-[hash:12].[ext]'
            }
          },
        ]
      },
      // FONTS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: { name: 'fonts/[name].[ext]' }
        }]
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
    new MiniCssExtractPlugin({ filename: 'bundle.css' }),
    new FaviconsWebpackPlugin({
      logo: './src/img/favicon.png',
      prefix: 'icons-[hash:8]/',
      statsFilename: 'iconstats-[hash:8].json',
      background: '#fff'
    }),
    // MPA
    new HtmlWebpackPlugin({
      production: true,
      template: __dirname + '/src/ejs/index-page.ejs',
      filename: 'index.html',
      title: 'Index page',
      chunks: ['index'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      },
      description: 'Some descripton',
      author: 'Some author',
      keywords: 'keyword1 keyword2',
      image: 'http://somesite.com/img/png',
      itemprop: {
        name: 'Index page',
        description: 'Some descripton',
        image: 'http://somesite.com/img/png'
      },
      og: {},
      twitter: {},

    }),
    new HtmlWebpackPlugin({
      production: true,
      template: __dirname + '/src/ejs/second-page.ejs',
      filename: 'second.html',
      title: 'Second page',
      chunks: ['second'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true
      },
      description: 'Some descripton2',
      author: 'Some author2',
      keywords: 'keyword12 keyword22',
      image: 'http://somesite.com/img2.png',
      itemprop: {
        name: 'Second page',
        description: 'Some descripton2',
        image: 'http://somesite.com/img2.png'
      },
      og: {},
      twitter: {},
    }),
  ]
};
