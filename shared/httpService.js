var request = require('request')

const dotenv = require('dotenv');
dotenv.config();

module.exports = {}

// Private methods
var requestFn = function (url, cb) {
    request({
            uri: url,
            headers: {
                'X-CMC_PRO_API_KEY': process.env.API_TOKEN
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