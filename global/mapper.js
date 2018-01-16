

var mapFromRestObject = function (restObject){
    var botObject = {}
    botObject.totalMarketCapUSD = restObject.total_market_cap_usd;
    botObject.total24hVolumeUSD = restObject.total_24h_volume_usd;
    botObject.totalMarketCapEUR = restObject.total_market_cap_eur;
    botObject.total24hVolumeEUR = restObject.total_24h_volume_eur;
    botObject.bitcoinPercentage = restObject.bitcoin_percentage_of_market_cap;
    botObject.activeCurrencies = restObject.active_currencies;
    return botObject;
}

module.exports.mapFromRestObject = mapFromRestObject;