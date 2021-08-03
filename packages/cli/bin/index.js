#!/usr/bin/env node

const program = require('commander')

program
  .version(process.env.npm_package_version)

program
  .command(`create`)
  .action(function (env, options) {
    console.log('create');
  })

program
  .command(`update`)
  .action(function (env, options) {
    console.log('update');
  })

program
  .command(`template list`)
  .action(function (env, options) {
    console.log('template list');
  })

program.parse(process.argv)
