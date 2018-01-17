const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const CurrencyMapper = require('../mapper')
const HttpService = require('../../shared/httpService')
const Credentials = require('../../credentials')
const Constant = require('../../constants')
class RankController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {

        var limit = 0;
        var rankLength = scope.message.text.match(/[0-9][0-9]?[0-9]?/i)[0]
        var rank = rankLength ? rankLength : Constant.DEFAULT_ITEMS_LENGTH

        HttpService.request(Credentials.currencyEndpointUrl + '/?limit=' + limit, function (err, data) {

            data = data.map(CurrencyMapper.mapFromRestObject).filter(function(value){
                return value.change7d;
            });

            data = data.sort(function (a, b) {
                if(a.change7d < b.change7d){
                    return -1;
                }else if(a.change7d > b.change7d){
                    return 1;
                }
                return 0;
            }).slice(0,rank);

            var message = '';
            data.forEach(function (item, index) {
                message = message.concat(++index + '. ' + item.symbol + ' (' + item.change7d + ' %)' + ' /' + item.id + ' \n');
            });
            scope.sendMessage(message);
        });
    }
}


module.exports.RankController = RankController;
