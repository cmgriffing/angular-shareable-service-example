const fs = require('fs');
const path = require('path');

const parseGitignore = require('parse-gitignore');

console.log('Starting postinstall for service');

const shareableRoot = path.resolve('./');
const projectRoot = path.resolve('../../');
const libraryRoot = path.resolve('./projects/shareable-service/src');

console.log('Paths:', {
  shareableRoot,
  projectRoot,
  libraryRoot,
});

const sharedJsonPath = path.resolve(projectRoot + '/shared.json');
const defaultInstallPath = '/src/app/services/shared';
const defaultFullInstallPath = path.resolve(projectRoot +  defaultInstallPath);
let installPath = defaultInstallPath;
let fullInstallPath = defaultFullInstallPath;

if(fs.existsSync(sharedJsonPath)) {
  const sharedJson = require(sharedJsonPath);
  if(!sharedJson.installPath) {
    throw new Error('installPath is invalid in shared.json');
  }
  installPath = sharedJson.installPath;
  fullInstallPath = path.resolve(projectRoot + sharedJson.installPath);
} else {
  // create shared.json if it does not exist
  fs.writeFileSync(sharedJsonPath, JSON.stringify({
    defaultInstallPath
  }, null, 2));
  console.log("shared.json file written to project root. Don't forget to commit this file to your repo.");
}

if(fs.existsSync(fullInstallPath)) {
  fs.rmdirSync(fullInstallPath);
}

fs.mkdirSync(fullInstallPath, { recursive: true });

fs.copyFileSync(
  libraryRoot + '/public-api.ts',
  fullInstallPath + '/public-api.ts',
);

const parsedGitignore = parseGitignore(fs.readFileSync(projectRoot + '/.gitignore'));

if(!parsedGitignore.find(installPath)) {
  console.log('Adding install path to gitignore');
  fs.appendFileSync(`\n${projectRoot}/.gitignore\n`);
}

console.log('Shared Services install complete');
