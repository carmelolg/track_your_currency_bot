const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('../finder/mapper')
const HttpService = require('../shared/httpService')
const Credentials = require('../credentials')

class SingleCurrencyController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        console.log('entro qui single', scope.message.text)
        var currency = scope.message.text.match(/[a-z]+/i)[0];

        HttpService.request(Credentials.currencyEndpointUrl + '/' + currency + '/?convert=EUR', function (err, data) {
            var botObject = CurrencyMapper.mapFromRestObject(data[0] ? data[0] : data);
            var message = '';
            message = message.concat('Name: ' + botObject.name + '\n');
            message = message.concat('Symbol: ' + botObject.symbol + '\n');
            message = message.concat('Rank: ' + botObject.rank + '\n');
            message = message.concat('Current value: -' + botObject.priceUSD + '$ -' + botObject.priceEUR + '€ -' + botObject.priceBTC + 'BTC \n');
            message = message.concat('Market cap. ($ USD): ' + botObject.marketCapUSD + '\n');
            message = message.concat('Last 24h volume ($ USD): ' + botObject.Volume24hUSD + '\n');
            message = message.concat('Market cap. (€ EUR): ' + botObject.marketCapEUR + '\n');
            message = message.concat('Last 24h volume (€ EUR): ' + botObject.Volume24hEUR + '\n');
            message = message.concat('Change 1h: ' + botObject.change1h + ' % \n');
            message = message.concat('Change 24h: ' + botObject.change24h + ' % \n');
            message = message.concat('Change 7d: ' + botObject.change7d + ' % \n');
            scope.sendMessage(message, {'parse_mode': 'Markdown'});
        });
    }
}


module.exports.SingleCurrencyController = SingleCurrencyController;