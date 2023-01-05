const sum = (a,b) =>{
    return a + b
}

//let oneEuroIs = {
    //"JPY": 127.9, // japan yen
    //"USD": 1.2, // us dollar
    //"GBP": 0.8, // british pound
//}
const fromEuroToDollar = (a) =>{
    return a*1.2
}
const fromEuroToYen = (a) =>{
    return a*127.9
}
const fromEuroToPound = (a) =>{
    return a*0.8
}
module.exports = {sum,fromEuroToDollar,fromEuroToYen,fromEuroToPound};

