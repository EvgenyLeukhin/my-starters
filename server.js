const path = require('path');
const express = require('express');
const chalk = require('chalk');
const compression = require('compression');
const server = express();
const PORT = 8889;
const PATH = path.join(__dirname, './public');

server.use(compression());
server.use(express.static(PATH));

server.listen(PORT, () => {
  console.log(chalk.green('Express-server is running up'));
  console.log('-----------------------------------');
  console.log(`[MODE]    ` + chalk.yellow.bold('PRODUCTION'));
  console.log('[Folder]  Serving files from:' + chalk.blue('./public'));
  console.log(`[Local]   ` + chalk.blue.underline.bold('http://localhost:' + PORT));
});
