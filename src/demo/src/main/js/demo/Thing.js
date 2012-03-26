define(
  'demo.Thing',

  [
    'ephox.wrap.JQuery',
    'js!demo:example.js'
  ],

  function ($) {
    return function () {
      var note = $("<div/>").html(SomeGlobal); // set in example.js
      $("body").append(note);
    };
  }
);
