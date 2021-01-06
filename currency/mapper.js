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

    console.log(data);

    quote = data.quote['EUR'];
    data.priceEUR = CurrencyUtils.convertToCurrency(quote.price, 2);
    data.marketCapEUR = CurrencyUtils.convertToCurrency(quote.market_cap);
    data.volume24hEUR = CurrencyUtils.convertToCurrency(quote.volume_24h);
    data.change1h = quote.percent_change_1h;
    data.change24h = quote.percent_change_24h;
    data.change7d = quote.percent_change_7d;

    return data;
}

module.exports.map = map;