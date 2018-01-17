const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('./mapper')
const HttpService = require('../shared/httpService')
const Credentials = require('../credentials')
class FinderController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {


        var limit = 0;
        if (scope.message.text != '/all') {
            limit = scope.message.text.match(/[0-9][0-9]?[0-9]?/i)[0];
        }

        HttpService.request(Credentials.currencyEndpointUrl + '/?convert=EUR&limit=' + limit, function (err, data) {
            data = data.map(CurrencyMapper.mapFromRestObject);
            var message = '';
            data.forEach(function (item, index) {
                message = message.concat(++index + '. ' + item.symbol + ' (' + item.change1h + ' %)' + ' /' + item.id + ' \n');
            });
            scope.sendMessage(message);
        });
    }
}


module.exports.FinderController = FinderController;
