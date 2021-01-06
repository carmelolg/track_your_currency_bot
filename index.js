'use strict'

const dotenv = require('dotenv');
dotenv.config();

const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const telegram = new Telegram.Telegram(process.env.TOKEN, {
    workers: 1,
    webAdmin: {
        port: 7779,
        host: 'localhost'
    }
})

const StartController = require("./start").StartController;
const SingleCurrencyController = require("./currency/single_currency").SingleCurrencyController;
const DonateController = require("./donate").DonateController;

telegram.router
    .when(new TextCommand('/start'), new StartController())
    .when(new TextCommand('/help'), new StartController())
    .when(new TextCommand('/donate'), new DonateController())
    .otherwise(new SingleCurrencyController())