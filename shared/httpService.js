var request = require('request')
const Credentials = require('../credentials')

module.exports = {}

// Private methods
var requestFn = function (url, cb) {
    request({
            uri: url,
            headers: {
                'X-CMC_PRO_API_KEY': Credentials.apiToken
            }
        },
        function (error, response, body) {
            if (error) {
                console.error(error);
                cb(error);
            } else {
                body = JSON.parse(body);
                cb(null, body);
            }
        });
}

module.exports.request = requestFn;