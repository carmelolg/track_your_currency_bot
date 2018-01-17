const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const HttpService = require('../shared/httpService')
const Credentials = require('../credentials')
const GlobalObjectMapper = require('./mapper')
class GlobalController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        HttpService.request(Credentials.globalEndpointUrl + '/?convert=EUR', function (err, data) {

            var botObject = GlobalObjectMapper.mapFromRestObject(data);
            var message = '';
            message = message.concat('Market cap. ($ USD): ' + botObject.totalMarketCapUSD + ' $\n');
            message = message.concat('Last 24h volume ($ USD): ' + botObject.total24hVolumeUSD + ' $\n\n');
            message = message.concat('Market cap. (€ EUR): ' + botObject.totalMarketCapEUR + ' €\n');
            message = message.concat('Last 24h volume (€ EUR): ' + botObject.total24hVolumeEUR + ' €\n\n');
            message = message.concat('Bitcoin percentage: ' + botObject.bitcoinPercentage + ' % \n');
            message = message.concat('Total active currencies: ' + botObject.activeCurrencies + '\n');

            scope.sendMessage(message, {'parse_mode': 'Markdown'});
        });
    }
}


// module.export{
module.exports.GlobalController = GlobalController;
