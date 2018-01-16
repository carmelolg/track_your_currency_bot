const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class OtherwiseController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {
        scope.sendMessage('Are you kidding me? This command not exists.')
    }
}


module.exports.OtherwiseController  = OtherwiseController ;
