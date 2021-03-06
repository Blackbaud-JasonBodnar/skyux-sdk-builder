/*jslint node: true */
'use strict';

const karmaUtils = require('./utils/karma-utils');
const tsLinter = require('./utils/ts-linter');

/**
 * Spawns the karma test command.
 * @name test
 */
function test(command, argv) {

  argv = argv || process.argv;
  argv.command = command;

  karmaUtils.run(command, argv, 'src/app/**/*.spec.ts')
    .then(exitCode => {
      const tsLinterExitCode = tsLinter.lintSync(argv).exitCode;
      process.exit(exitCode || tsLinterExitCode);
    });
}

module.exports = test;
