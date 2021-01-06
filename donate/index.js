const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

const dotenv = require('dotenv');
dotenv.config();

class DonateController extends TelegramBaseController {

    /**
     * @param {Scope} scope
     */
    handle(scope) {
        scope.sendMessage('I\'m really excited that you want give me a present. \nSend me your donation to my BTC wallet:  \n' + process.env.BTC_ADDRESS + '' +
            '\n\nFor your trust infinitely thanks. @carmelolg');
    }
}


module.exports.DonateController = DonateController;
