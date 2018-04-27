/**
* Created by: Sashin Pradhan
* Metadefender File Uploader & Scanner
*/

var https = require('https');
var http = require('http');

var config = require("./config");

module.exports = {
    /**
     * show scan results based on hash
     */
    queryHash: function(hash) {
        console.log("File hash is: ", hash);
        console.log("Initiating request...");

        var options = {
            host: "scan." + config.server,
            port: 80,
            path: '/v2/hash/' + hash,
            method: 'GET',
            headers: { apikey: config.apikey }
        };

        http.request(options, function(res) {
            //console.log('STATUS: ' + res.statusCode);
            //console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var scanResults = JSON.parse(chunk);
                console.log(JSON.stringify(scanResults, null, 2));
            });
        }).end();
    },
    /**
     * Scan file
     */
    scanFile: function(file) {
        console.log("Scanning file: ", file, "...");

    }
};