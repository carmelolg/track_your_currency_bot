

var convertToCurrency = function (value, floating){
    if(Number(value)){
        return Number(value).toFixed(floating ? floating : 1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }else{
        return 0;
    }
}

function topComparator(a,b, fieldToCompare){
    return b[fieldToCompare] - a[fieldToCompare];
}

function worstComparator(a,b, fieldToCompare){
   return a[fieldToCompare] - b[fieldToCompare];
}

module.exports.convertToCurrency = convertToCurrency;
module.exports.topComparator = topComparator;
module.exports.worstComparator = worstComparator;