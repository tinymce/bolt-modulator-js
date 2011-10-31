define(
  'ephox.modulator.js.Modulator',

  [
    'global!ephox.bolt.loader.api.scripttag'
  ],

  function (scripttag) {
    var create = function (pather, prefix, path) {
      var wrapdefine = function (id, onsuccess, define) {
        return function () {
          define(id, [], function () { return null; });
          onsuccess();
        };
      };

      var can = function (id) {
        return id.indexOf("js!" + prefix + ":") === 0;
      };

      var modulate = function (id, define, require) {
        var length = ("js!" + prefix + ":").length;
        var url = pather(path) + '/' + id.substring(length);
        var load = function (onsuccess, onfailure) {
          var wrapped = wrapdefine(id, onsuccess, define);
          scripttag.load(url, wrapped, onfailure);
        };

        return {
          url: url,
          load: load,
          serial: true
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
