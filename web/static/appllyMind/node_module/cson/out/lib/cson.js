// Generated by CoffeeScript 1.8.0
(function() {
  var CSON, ambi, coffee, extractOpts, fsUtil, isJsOrCoffee, isJsonOrCson, js2coffee, pathUtil, requireFreshSafe, wait;

  coffee = require('coffee-script');

  js2coffee = require('js2coffee');

  fsUtil = require('fs');

  pathUtil = require('path');

  ambi = require('ambi');

  extractOpts = require('extract-opts').extractOpts;

  requireFreshSafe = require('requirefresh').requireFreshSafe;

  require('coffee-script/register');

  wait = function(delay, fn) {
    return setTimeout(fn, delay);
  };

  isJsOrCoffee = function(filePath) {
    return /\.(js|coffee)$/.test(filePath);
  };

  isJsonOrCson = function(filePath) {
    return /\.(json|cson)$/.test(filePath);
  };

  CSON = {
    parseFile: function(filePath, opts, next) {
      var err, _ref;
      _ref = extractOpts(opts, next), opts = _ref[0], next = _ref[1];
      filePath = pathUtil.resolve(filePath);
      if (isJsOrCoffee(filePath)) {
        requireFreshSafe(filePath, next);
      } else if (isJsonOrCson(filePath)) {
        fsUtil.readFile(filePath, (function(_this) {
          return function(err, data) {
            var dataStr;
            if (err) {
              return next(err);
            }
            dataStr = data.toString();
            opts.filename = filePath;
            return _this.parse(dataStr, opts, next);
          };
        })(this));
      } else {
        err = new Error("CSON.parseFile: Unknown extension type for " + filePath);
        next(err);
      }
      return this;
    },
    parseFileSync: function(filePath, opts) {
      var data, dataStr, err, result;
      opts || (opts = {});
      filePath = pathUtil.resolve(filePath);
      if (isJsOrCoffee(filePath)) {
        try {
          return result = requireFreshSafe(filePath);
        } catch (_error) {
          err = _error;
          return result = err;
        }
      } else if (isJsonOrCson(filePath)) {
        data = fsUtil.readFileSync(filePath);
        opts.filename = filePath;
        if (data instanceof Error) {
          result = data;
        } else {
          dataStr = data.toString();
          result = this.parseSync(dataStr, opts);
        }
        return result;
      } else {
        err = new Error("CSON.parseFileSync: Unknown extension type for " + filePath);
        return err;
      }
    },
    parse: function(src, opts, next) {
      var _ref;
      _ref = extractOpts(opts, next), opts = _ref[0], next = _ref[1];
      wait(0, (function(_this) {
        return function() {
          return ambi(_this.parseSync, src, opts, next);
        };
      })(this));
      return this;
    },
    parseSync: function(src, opts) {
      var err, result;
      opts || (opts = {});
      if (opts.sandbox == null) {
        opts.sandbox = true;
      }
      try {
        result = JSON.parse(src);
      } catch (_error) {
        err = _error;
        try {
          result = coffee["eval"](src, opts);
        } catch (_error) {
          err = _error;
          result = err;
        }
      }
      return result;
    },
    stringify: function(obj, next) {
      wait(0, (function(_this) {
        return function() {
          return ambi(_this.stringifySync, obj, next);
        };
      })(this));
      return this;
    },
    stringifySync: function(obj) {
      var err, result, src;
      try {
        src = "var result = " + (JSON.stringify(obj));
        result = js2coffee.build(src);
        result = result.replace(/^\s*result\s*\=\s/, '');
        if (typeof obj === 'object') {
          if (!Array.isArray(obj)) {
            if (result !== '{}') {
              result = '{\n' + result + '\n}';
            }
          }
        }
      } catch (_error) {
        err = _error;
        result = err;
      }
      return result;
    }
  };

  module.exports = CSON;

}).call(this);