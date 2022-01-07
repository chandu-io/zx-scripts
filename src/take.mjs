#!/usr/bin/env zx

$.verbose = false;
const dirname = argv._[0];
if (dirname === undefined) {
  console.error(chalk.red('usage: take <dirname>'));
  process.exit(1);
}
await $`mkdir -p ${dirname}`;
cd(dirname);
console.log(await $`pwd`);
