#!/usr/bin/env zx

$.verbose = false;
const pwd = process.cwd();
const sources = await globby(path.resolve(pwd, 'src'));
const copyProcesses = sources
  .map(sourcePath => [sourcePath, path.resolve(pwd, 'bin', path.parse(sourcePath).name)])
  .map(([sourcePath, destinationPath]) => $`cp -f ${sourcePath} ${destinationPath}`);
await Promise.all(copyProcesses);
const destinations = await globby(path.resolve(pwd, 'bin'));
const executableProcesses = destinations.map(destinationPath => $`chmod +x ${destinationPath}`);
await Promise.all(executableProcesses);
