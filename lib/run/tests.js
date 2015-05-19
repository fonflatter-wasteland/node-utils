module.exports = (function() {
  'use strict';

  require('streamline').register({
    "cache": true,
    "fibers": true,
    "verbose": true
  });

  var closestPackage = require('closest-package');
  var path = require('path');
  var supportsColor = require('supports-color');

  var packageRoot = path.dirname(closestPackage.sync(__dirname));
  var binRoot = path.join(packageRoot, 'node_modules', '.bin');

  var child = require('child_process');

  var istanbulArguments = [
    'cover',
    '--config ' + path.join(packageRoot, '.istanbul.yml'),
    path.join(binRoot, '_mocha'),
  ];

  if (supportsColor) {
    istanbulArguments.push('--colors');
  }

  var istanbul = child.spawn(path.join(binRoot, 'istanbul'), istanbulArguments);
  istanbul.stdout.pipe(process.stdout);
  istanbul.stderr.pipe(process.stderr);

});
