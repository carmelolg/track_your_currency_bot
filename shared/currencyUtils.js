

var convertToCurrency = function (value){
    return value.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

module.exports.convertToCurrency = convertToCurrency;