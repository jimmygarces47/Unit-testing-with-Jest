// esta es mi función que suma dos números
const fromEuroToDollar = (a) => {
    return a * 1.2;
}
const fromDollarToYen =(b)=>{
    return (b / 1.2 )* 127.9;
}
const fromYenToPound =(c)=>{
    return (c / 127.9) *0.8;
}

// solo un registro en consola para nosotros.
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(3.0))
console.log(fromYenToPound(4.0))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}