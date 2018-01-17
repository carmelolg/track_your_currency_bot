'use strict'
const Parameters = require('./credentials.js')

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const telegram = new Telegram.Telegram(Parameters.token, {
    workers: 1
})

const StartController = require("./start").StartController;
const FinderController = require("./finder").FinderController;
const SingleCurrencyController = require("./single_currency").SingleCurrencyController;
const GlobalController = require("./global").GlobalController;
const OtherwiseController = require("./otherwise").OtherwiseController;

telegram.router
    .when(new TextCommand('/start'), new StartController())
    .when(new TextCommand('/help'), new StartController())
    .when(new RegexpCommand(/top[0-9][0-9]?[0-9]?/i), new FinderController())
    // .when(new RegexpCommand(/(?!top)([a-z]+)/gi), new SingleCurrencyController())
    .when(new TextCommand('/all'), new FinderController())
    .when(new TextCommand('/global'), new GlobalController())
    .otherwise(new SingleCurrencyController())

