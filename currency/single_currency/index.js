const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('../mapper')
const HttpService = require('../../shared/httpService')

const dotenv = require('dotenv');
dotenv.config();

class SingleCurrencyController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        var currency = scope.message.text.match(/[a-z0-9]+/gi).join('-');

        HttpService.request(process.env.ENDPOINT_URL + '/quotes/latest?symbol=' + currency + '&convert=EUR', function (err, data) {

            var message = '';
            console.log(data);
            if (data.status.error_code) {
                scope.sendMessage('Currency not found.');
            } else {
                var botObject = CurrencyMapper.map(data[0] ? data[0] : data);
                message = message.concat('Rank: ' + botObject.rank + '\n');
                message = message.concat('Symbol: ' + botObject.symbol + '\n');
                message = message.concat('Name: ' + botObject.name + '\n\n');
                message = message.concat('Current value: \n' + botObject.priceEUR + ' € EUR \n\n');
                message = message.concat('Market cap. (€ EUR): ' + botObject.marketCapEUR + ' €\n');
                message = message.concat('Last 24h volume (€ EUR): ' + botObject.volume24hEUR + ' €\n\n');
                message = message.concat('Change 1h: ' + botObject.change1h + ' % \n');
                message = message.concat('Change 24h: ' + botObject.change24h + ' % \n');
                message = message.concat('Change 7d: ' + botObject.change7d + ' % \n');
                scope.sendMessage(message, {
                    'parse_mode': 'Markdown'
                });
            }

        });
    }
}


module.exports.SingleCurrencyController = SingleCurrencyController;