const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class TopController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {

        $.sendMessage('')
    }
}


// module.export{
module.exports.TopController = TopController;
