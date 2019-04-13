'use strict';

var indexOf = Array.prototype.indexOf
  , isNaN   = require('../../Number/is-nan')
  , ois     = require('../../Object/is')
  , value   = require('../../Object/valid-value');

module.exports = function (searchElement) {
	var i;
	if (!isNaN(searchElement) && (searchElement !== 0)) {
		return indexOf.apply(this, arguments);
	}

	for (i = (arguments[1] >>> 0); i < (value(this).length >>> 0); ++i) {
		if (this.hasOwnProperty(i) && ois(searchElement, this[i])) {
			return i;
		}
	}
	return -1;
};
