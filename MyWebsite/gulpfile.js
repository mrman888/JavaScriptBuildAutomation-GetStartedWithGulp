/// <binding AfterBuild='copy-files' Clean='cleanup-files' ProjectOpened='watch-styles, typings, watch-scripts, watch-typings' />

var requireDir = require('require-dir');
var tasks = requireDir('./gulp/tasks');


