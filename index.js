'use strict'
const Parameters = require('./credentials.js')

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const telegram = new Telegram.Telegram(Parameters.token, {
    workers: 1,
    webAdmin: {
        port: 7779,
        host: 'localhost'
    }
})

const StartController = require("./start").StartController;
const FinderController = require("./currency/finder").FinderController;
const SingleCurrencyController = require("./currency/single_currency").SingleCurrencyController;
const RankController = require("./currency/rank").RankController;
const GlobalController = require("./global").GlobalController;
const DonateController = require("./donate").DonateController;

telegram.router
    .when(new TextCommand('/start'), new StartController())
    .when(new TextCommand('/help'), new StartController())
    .when(new RegexpCommand(/top[0-9][0-9]?[0-9]?/i), new RankController())
    // .when(new TextCommand('/all'), new FinderController()) // TODO too many cryptocurrency
    .when(new RegexpCommand(/rank[0-9][0-9]?[0-9]?/i), new FinderController())
    .when(new TextCommand('/global'), new GlobalController())
    .when(new TextCommand('/donate'), new DonateController())
    .otherwise(new SingleCurrencyController())

