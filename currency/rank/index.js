const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('../mapper')
const HttpService = require('../../shared/httpService')
const Credentials = require('../../credentials')
const Constant = require('../../constants')
const Utils = require('../../shared/utils')
class RankController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        var fnComparator = scope.message.text.match(/top/gi) ? Utils.topComparator : Utils.worstComparator;

        var rankLength = scope.message.text.match(/[0-9][0-9]?[0-9]?/i)[0]
        var rank = rankLength ? rankLength : Constant.DEFAULT_ITEMS_LENGTH

        HttpService.request(Credentials.currencyEndpointUrl + '/?limit=0', function (err, data) {

            data = data.map(CurrencyMapper.mapFromRestObject).filter(function (value) {
                return value.change7d;
            });

            data = data.sort(function (a, b) {
                return fnComparator(a,b, 'change7d');
            }).slice(0, rank);

            var message = '';
            data.forEach(function (item, index) {
                message = message.concat(++index + '. ' + item.symbol + ' (' + item.change7d + ' %)' + ' /' + item.id + ' \n');
            });
            scope.sendMessage(message);
        });
    }
}


module.exports.RankController = RankController;
