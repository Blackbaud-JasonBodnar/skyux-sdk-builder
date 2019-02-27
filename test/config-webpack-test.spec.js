/*jshint jasmine: true, node: true */
'use strict';

const path = require('path');
const runtimeUtils = require('../utils/runtime-test-utils');

describe('config webpack test', () => {
  let skyPagesConfig;

  beforeEach(() => {
    skyPagesConfig = {
      skyux: {
        mode: 'advanced'
      },
      runtime: runtimeUtils.getDefaultRuntime()
    };
  });

  function getLib() {
    return require('../config/webpack/test.webpack.config');
  }

  function getConfig(argv) {
    return getLib().getWebpackConfig(skyPagesConfig, argv);
  }

  it('should expose a getWebpackConfig method', () => {
    const lib = getLib();
    expect(typeof lib.getWebpackConfig).toEqual('function');
  });

  it('should return a config object', () => {
    const config = getConfig();
    expect(config).toEqual(jasmine.any(Object));
  });
});
