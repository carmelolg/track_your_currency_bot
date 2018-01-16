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
                cb(null, body);
            }
        });
}

module.exports.request = requestFn;