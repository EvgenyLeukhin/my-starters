const path = require('path'),
  express = require('express'),
  chalk = require('chalk'),
  server = express(),
  PORT = 3333,
  PATH = path.join(__dirname, './public');

server.use(express.static(PATH));

server.listen(PORT, () => {
  console.log(chalk.green('Express-server is running up'));
  console.log('------------------------------------');
  console.log(`[MODE]    ` + chalk.yellow.bold('PRODUCTION'));
  console.log('[Folder]  Serving files from:' + chalk.blue('./public'));
  console.log(`[Local]   ` + chalk.blue.underline.bold('http://localhost:' + PORT));
});
