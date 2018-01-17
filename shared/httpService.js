var request = require('request')

module.exports = {}

// Private methods
var requestFn = function (url, cb) {
    request(url,
        function (error, response, body) {
            if (error) {
                console.error(error);
                cb(error);
            } else {
                body = JSON.parse(body);
                // if (Array.isArray(body)) {
                    // body.map(JSON.parse)
                    cb(null, body);
                // } else {
                //     cb(null, body);
                // }
            }
        });
}

module.exports.request = requestFn;