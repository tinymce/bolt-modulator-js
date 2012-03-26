configure({
  types: [
    type('js', 'ephox.modulator.js')
  ],
  sources: [
    source('amd', 'demo', '../../src/main/js', mapper.hierarchical),
    source('amd', 'ephox.modulator.js', '../../../../src/main/js', mapper.hierarchical),
    source('amd', 'ephox.wrap.JQuery', '../../lib/run/depend', mapper.flat),
    source('amd', 'ephox', '../../../../lib/run/depend', mapper.flat),
    source('js', 'demo', '../../src/main/lib')
  ]
});
