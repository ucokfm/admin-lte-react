const path = require('path');
const fse = require('fs-extra');

const buildDir = path.resolve('build');

// move all js files
fse.walk(path.resolve(buildDir))
  .on('data', (item) => {
    const name = path.basename(item.path);
    if (path.extname(name) === '.js') {
      fse.copySync(item.path, path.resolve(buildDir, name));
    }
  })
  .on('end', () => {
    // delete directories
    fse.removeSync(path.resolve(buildDir, 'apps'));
    fse.removeSync(path.resolve(buildDir, 'controlbar'));
    fse.removeSync(path.resolve(buildDir, 'footer'));
    fse.removeSync(path.resolve(buildDir, 'header'));
    fse.removeSync(path.resolve(buildDir, 'layout'));
    fse.removeSync(path.resolve(buildDir, 'page'));
    fse.removeSync(path.resolve(buildDir, 'sidebar'));
    fse.removeSync(path.resolve(buildDir, 'widgets'));
  });
