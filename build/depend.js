var lib = 'lib';
var licenses = lib + '/run/licenses';

var cleanDirs = [ lib, licenses ];

var dependencies = [
  {
    name: "bolt",
    repository: "buildrepo2",
    version : "latest",
    source: "bolt.zip",
    targets: [
      { name: "jsc", path: lib + "/bolt" },
      { name: "bolt", path: lib + "/bolt" },
      { name: "*.js", path: lib + "/bolt" }
    ],
    executables: [
      lib + "/bolt/jsc",
      lib + "/bolt/bolt"
    ]
  },

  {
    name: "yaml",
    repository: "buildrepo2",
    version: "latest",
    source: "yaml.zip",
    targets: [
      { name: "module/*.js", path: lib + "/compile" },
      { name: "licenses/*", path: licenses }
    ]
  }
];
