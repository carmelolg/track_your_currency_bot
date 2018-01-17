const CurrencyUtils = require('../shared/utils')

var mapFromRestObject = function (restObject){
    var botObject = {}

    botObject.id = restObject.id;
    botObject.name = restObject.name;
    botObject.symbol = restObject.symbol;
    botObject.rank = restObject.rank;
    botObject.priceUSD = CurrencyUtils.convertToCurrency(restObject.price_usd,2);
    botObject.priceEUR = CurrencyUtils.convertToCurrency(restObject.price_eur,2);
    botObject.priceBTC = CurrencyUtils.convertToCurrency(restObject.price_btc,6);
    botObject.marketCapUSD = CurrencyUtils.convertToCurrency(restObject.market_cap_usd);
    botObject.Volume24hUSD = CurrencyUtils.convertToCurrency(restObject['24h_volume_usd']);
    botObject.marketCapEUR = CurrencyUtils.convertToCurrency(restObject.market_cap_eur);
    botObject.Volume24hEUR = CurrencyUtils.convertToCurrency(restObject['24h_volume_eur']);
    botObject.change1h = restObject.percent_change_1h;
    botObject.change24h = restObject.percent_change_24h;
    botObject.change7d = restObject.percent_change_7d;
    return botObject;
}

module.exports.mapFromRestObject = mapFromRestObject;