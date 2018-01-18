const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('../mapper')
const HttpService = require('../../shared/httpService')
const Credentials = require('../../credentials')

class SingleCurrencyController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        var currency = scope.message.text.match(/[a-z0-9]+/gi).join('-');

        HttpService.request(Credentials.currencyEndpointUrl + '/' + currency + '/?convert=EUR', function (err, data) {

            var message = '';
            if (data.error) {
                scope.sendMessage('Currency not found.');
            } else {
            var botObject = CurrencyMapper.mapFromRestObject(data[0] ? data[0] : data);
                message = message.concat('Rank: ' + botObject.rank + '\n');
                message = message.concat('Symbol: ' + botObject.symbol + '\n');
                message = message.concat('Name: ' + botObject.name + '\n\n');
                message = message.concat('Current value: \n' + botObject.priceUSD + ' $ USD \n' + botObject.priceEUR + ' € EUR \n' + botObject.priceBTC + ' BTC \n\n');
                message = message.concat('Market cap. ($ USD): ' + botObject.marketCapUSD + ' $\n');
                message = message.concat('Last 24h volume ($ USD): ' + botObject.volume24hUSD + ' $\n');
                message = message.concat('Market cap. (€ EUR): ' + botObject.marketCapEUR + ' €\n');
                message = message.concat('Last 24h volume (€ EUR): ' + botObject.volume24hEUR + ' €\n\n');
                message = message.concat('Change 1h: ' + botObject.change1h + ' % \n');
                message = message.concat('Change 24h: ' + botObject.change24h + ' % \n');
                message = message.concat('Change 7d: ' + botObject.change7d + ' % \n');
                scope.sendMessage(message, {'parse_mode': 'Markdown'});
            }

        });
    }
}


module.exports.SingleCurrencyController = SingleCurrencyController;