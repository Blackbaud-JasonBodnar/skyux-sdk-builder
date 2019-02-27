/*jshint node: true*/
'use strict';

/**
 * Requires the shared karma config and sets any local properties.
 * @name getConfig
 * @param {Object} config
 */
function getConfig(config) {
  require('./shared.karma.conf')(config);
  let configuration = {
    browsers: [
      'HeadlessChrome'
    ],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-setuid-sandbox',
          '--disable-web-security',
          '--disable-gpu',
          '--hide-scrollbars',
          '--ignore-certificate-errors',
          '--no-sandbox'
        ]
      }
    },
    concurrency: Infinity
  };

  config.set(configuration);
}

module.exports = getConfig;
