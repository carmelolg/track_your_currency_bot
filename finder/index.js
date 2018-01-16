const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class FinderController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {
        scope.sendMessage('Non fare il furbo, il comando non esiste!')
    }
}


module.exports.FinderController = FinderController;
