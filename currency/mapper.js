const CurrencyUtils = require('../shared/utils')

var map = function (response) {
    var data = {}

    data = response.data;
    var keys = Object.keys(data)

    if (keys.length > 0) {
        data = data[keys[0]];
    }
    
    data.id = data.id;
    data.name = data.name;
    data.symbol = data.symbol;
    data.rank = data.cmc_rank;

    quote = data.quote['EUR'];
    data.priceEUR = CurrencyUtils.convertToCurrency(quote.price, 2);
    data.marketCapEUR = CurrencyUtils.convertToCurrency(quote.market_cap);
    data.volume24hEUR = CurrencyUtils.convertToCurrency(quote.volume_24h);
    data.change1h = quote.percent_change_1h;
    data.change24h = quote.percent_change_24h;
    data.change7d = quote.percent_change_7d;

    return data;
}

var mapFromRestObject = function (restObject) {
    var botObject = {}

    restObject = restObject.data;
    Object.keys(restObject).forEach(k => {
        restObject = restObject[k];
    });

    botObject.id = restObject.id;
    botObject.name = restObject.name;
    botObject.symbol = restObject.symbol;
    botObject.rank = restObject.rank;
    botObject.priceUSD = CurrencyUtils.convertToCurrency(restObject.price_usd, 2);
    botObject.priceEUR = CurrencyUtils.convertToCurrency(restObject.price_eur, 2);
    botObject.priceBTC = CurrencyUtils.convertToCurrency(restObject.price_btc, 6);
    botObject.marketCapUSD = CurrencyUtils.convertToCurrency(restObject.market_cap_usd);
    botObject.volume24hUSD = CurrencyUtils.convertToCurrency(restObject['24h_volume_usd']);
    botObject.marketCapEUR = CurrencyUtils.convertToCurrency(restObject.market_cap_eur);
    botObject.volume24hEUR = CurrencyUtils.convertToCurrency(restObject['24h_volume_eur']);
    botObject.change1h = restObject.percent_change_1h;
    botObject.change24h = restObject.percent_change_24h;
    botObject.change7d = restObject.percent_change_7d;
    return botObject;
}

module.exports.map = map;
module.exports.mapFromRestObject = mapFromRestObject;