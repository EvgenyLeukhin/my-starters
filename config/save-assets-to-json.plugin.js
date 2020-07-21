function SaveAssetsToJsonPlugin(filename, regexp) {
  Object.assign(this, { filename, regexp });

  this.plugin = { name: 'SaveAssetsPlugin' };

  this.previousData = null;
}

SaveAssetsToJsonPlugin.prototype.apply = function apply(compiler) {
  const emit = (compilation, callback) => {
    const assetPaths = Object.keys(compilation.assets).filter(assetName => assetName.match(this.regexp));
    const data = JSON.stringify(assetPaths);

    if (this.previousData === data) {
      return callback(null);
    }

    compilation.assets[this.filename] = {
      source: () => data,
      size: () => data.length,
    };

    this.previousData = data;

    callback(null);
  };

  if (compiler.hooks) {
    compiler.hooks.emit.tapAsync(this.plugin, emit);
  } else {
    compiler.plugin('emit', emit);
  }
};

module.exports = SaveAssetsToJsonPlugin;
