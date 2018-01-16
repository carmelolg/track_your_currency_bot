const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class GlobalController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage('')
    }
}


// module.export{
module.exports.GlobalController = GlobalController;
