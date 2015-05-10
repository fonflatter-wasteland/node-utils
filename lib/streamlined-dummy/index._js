module.exports = function (_) {
  'use strict';

  setTimeout(_, 100);
  _(null, require('../dummy')());
};
