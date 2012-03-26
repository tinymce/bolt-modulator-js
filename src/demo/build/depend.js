var lib = 'lib';
var licenses = lib + '/run/licenses';

var cleanDirs = [ lib, licenses ];

var dependencies = [
  {
    name: "wrap-jquery",
    repository: "buildrepo2",
    version: "latest",
    source: "wrap-jquery.zip",
    targets: [
      { name: "compile/ephox*.js", path: lib + "/run/depend" }
    ]
  }
];
