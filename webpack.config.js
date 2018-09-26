const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  mode: 'development',
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
        use: [{ loader: 'ejs-compiled-loader' }]
      },

      // CSS //
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // IMG //
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000,
            name: 'img/[name]-[hash:12].[ext]'
          }
        }]
      },
      // FONTS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'fonts/[name].[ext]' }
          }
        ]
      },
    ]
  },
  plugins: [
    // MPA
    new HtmlWebpackPlugin({
      template: __dirname + '/src/ejs/index-page.ejs',
      filename: 'index.html',
      title: 'Index page',
      chunks: ['index'],
      favicon: './src/img/favicon.ico'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/ejs/second-page.ejs',
      filename: 'second.html',
      title: 'Second page',
      chunks: ['second'],
      favicon: './src/img/favicon.ico'
    }),
  ]
};









// to load html into main.js
// {
//   test: /\.html$/,
//   use: [
//     {
//       loader: 'file-loader',
//       options: { name: '[name].html' }
//     },
//     { loader: 'extract-loader' },
//     {
//       loader: 'html-loader',
//       options: {
//         attrs: ['img:src'],
//         interpolate: true
//       }
//     }
//   ]
// },
