module.exports = (function () {
  'use strict';

  require('streamline').register({
    "cache": true,
    "fibers": true,
    "verbose": true
  });

  var closestPackage = require('closest-package');
  var istanbul = require('istanbul/lib/cli');
  var path = require('path');

  var packageRoot = path.dirname(closestPackage.sync(__dirname));

  istanbul.runToCompletion([
      'cover',
      '--config ' + path.join(packageRoot, '.istanbul.yml'),
      path.join(packageRoot, 'node_modules', '.bin', '_mocha'),
    ]
  );

});
