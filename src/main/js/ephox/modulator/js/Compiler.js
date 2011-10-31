define(
  'ephox.modulator.js.Compiler',

  [
    'global!ephox.bolt.compiler.tools.io'
  ],

  function (io) {
    var create = function (pather, prefix, path) {

      var can = function (id) {
         return id.indexOf("js!" + prefix + ":") === 0;
      };

      var modulate = function (id) {
        var length = ("js!" + prefix + ":").length;
        var url = pather(path) + '/' + id.substring(length);

        var content = io.read(url);

        var render = function () {
          return content + '\n' +
             'ephox.bolt.module.api.define("' + id + '", [], function () { return null; });';
        };

        var load = function (define) {
          define(id, [], function () { return null; });
        };

        return {
          url: url,
          serial: false,
          render: render,
          load: load
        };
      };

      return {
        can: can,
        modulate: modulate
      };
    };

    return {
      create: create
    };
  }
);
