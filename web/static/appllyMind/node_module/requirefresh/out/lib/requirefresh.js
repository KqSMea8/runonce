// Generated by CoffeeScript 1.6.3
var app;

app = {
  requireFreshSafe: function(path, next) {
    var d, result;
    result = null;
    d = require('domain').create();
    d.on('error', function(err) {
      result = err;
      return typeof next === "function" ? next(err) : void 0;
    });
    d.run(function() {
      var err;
      try {
        result = app.requireFresh(path);
      } catch (_error) {
        err = _error;
        result = err;
        return typeof next === "function" ? next(err) : void 0;
      }
      return typeof next === "function" ? next(null, result) : void 0;
    });
    return result;
  },
  requireFresh: function(path) {
    var result;
    path = require('path').resolve(path);
    delete require.cache[path];
    result = require(path);
    delete require.cache[path];
    return result;
  }
};

module.exports = app;