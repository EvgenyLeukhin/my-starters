# Webpack-React starter

## Commands:
* `npm start` - Start Development with dev-server on http://localhost:8888
* `npm run build` - Build project to the public/
* `npm run server` - Start server from public/ on http://localhost:8889
* `npm run build-and-serve` - Build project and start server from public/ on http://localhost:8889


## Dependencies:

### React
* **react**
* **react-dom**

### Webpack
* **webpack**
* **webpack-cli**
* **webpack-dev-server**
* **webpackbar** (build progress-bar)
* **webpack-merge** (merge common configs in webpack)
* **webpack-bundle-analyzer** (analyze bundles)

### Webpack-plugins
* **html-webpack-plugin** (html-template)
* **clean-webpack-plugin** (delete public folder when build)
* **compression-webpack-plugin** (gzip-compression data when build)

### JS
* **babel-core** 
* **babel-loader** 
* **babel-preset-env** 
* **babel-preset-react** 
* **babel-plugin-transform-class-properties** (use classes props)
* **babel-plugin-transform-object-rest-spread** (use rest-spread operator)
* **uglifyjs-webpack-plugin** (compress)

### CSS
* **style-loader** (for load to &lt;style&gt; tag)
* **postcss-loader** (for autoprefixer when build)
* **autoprefixer**
* **cssnano** (css remove comments)
* **css-loader** (css files)
* **sass-loader** (scss files)
* **node-sass** (convert scss to css)
* **mini-css-extract-plugin'** (css-bundle when build)
* **optimize-css-assets-webpack-plugin'** (min-css when build)

### Images & Fonts
* **file-loader** (for images and fonts)
* **url-loader** (inline small images with base-data)
* **image-webpack-loader** (for compress images when build)
* **favicons-webpack-plugin** (generate fav-icons when build)

### Build-server
* **express** (node-server framework)
* **compression** (gzip-compression for servering)
* **chalk** (color text in console)

### ESLint
* **eslint**
* **eslint-plugin-react**
* **babel-eslint**
