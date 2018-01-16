const Constant = require('../constants')
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
class StartController extends TelegramBaseController {

    /**
     * @param {Scope} $
     */
    handle($) {
        $.sendMessage(Constant.SPIEGONE_DA_TORINO, {'parse_mode': 'Markdown'});
    }
}


// module.export{
module.exports.StartController = StartController;
