

var convertToCurrency = function (value, floating){
    if(Number(value)){
        return Number(value).toFixed(floating ? floating : 1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }else{
        return 0;
    }
}

module.exports.convertToCurrency = convertToCurrency;