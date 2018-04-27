#!/usr/bin/env node

var program = require('commander');
var metadefender_scanner =  require("./metadefender_scanner");

program
    .version('0.0.1')
    .option('-f, --scanfile <filepath>', 'Scan file')
    .option('-s, --hashquery <hash>', 'Lookup file info using hash')
    .parse(process.argv);

if (program.scanfile) {
	metadefender_scanner.queryHash(program.hashquery);
    metadefender_scanner.scanFile(program.scanfile);
}
