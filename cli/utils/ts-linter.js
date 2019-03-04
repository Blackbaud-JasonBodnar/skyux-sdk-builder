/*jslint node: true */
'use strict';

const spawn = require('cross-spawn');
const logger = require('@blackbaud/skyux-logger');
const skyPagesConfigUtil = require('../../config/sky-pages/sky-pages.config');

const flags = [
  '--project',
  skyPagesConfigUtil.spaPath('tsconfig.json'),
  '--config',
  skyPagesConfigUtil.spaPath('tslint.json'),
  '--exclude',
  '**/node_modules/**/*.ts'
];

function lint() {
  logger.info('Starting TSLint...');

  const cp = spawn('./node_modules/.bin/tslint', flags);

  return new Promise((resolve) => {
    cp.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    cp.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    cp.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      resolve();
    });
  });
}

module.exports = {
  lint
};
