var expect = require('chai').expect;

var dummy = require('../lib/dummy');
var streamlinedDummy = require('../lib/streamlined-dummy');

test('dummy', function() {
  'use strict';

  expect(dummy()).to.equal('dummy message');
});


test('streamlined dummy', function(next) {
  'use strict';

  streamlinedDummy(function (err, data) {
    expect(data).to.equal('dummy message');
    next();
  });
});
