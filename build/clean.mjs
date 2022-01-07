#!/usr/bin/env zx

$.verbose = false;
const pwd = process.cwd();
const destinations = await globby(path.resolve(pwd, 'bin'));
const deleteProcesses = destinations.map(destinationPath => $`rm -rf ${destinationPath}`);
await Promise.all(deleteProcesses);
