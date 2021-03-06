#!/usr/bin/env node
require('source-map-support/register');
const path = require('path');
const yargs = require('yargs');

// eslint-disable-next-line no-unused-expressions
yargs
  .commandDir(path.join(__dirname, '..', 'lib', 'commands'))
  .demandCommand()
  .recommendCommands()
  .strict()
  .wrap(Math.min(100, yargs.terminalWidth()))
  .alias('h', 'help')
  .alias('v', 'version').argv;
