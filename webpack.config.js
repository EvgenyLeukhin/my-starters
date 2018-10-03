const path = require('path');

const paths = {
  SRC:  path.resolve(__dirname, 'src/main.js'),
  DIST: path.resolve(__dirname, 'public')
};

module.exports = {
  entry: paths.SRC,

  output: {
    path: paths.DIST,
    publicPath: '/'
  },

  resolve: { extensions: ['.js', '.jsx'] },

  module: {
    rules: [
      // JS
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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

};
