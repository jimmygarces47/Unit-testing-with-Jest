// importar la función sum del archivo app.js
/*const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});*/

    
const { fromEuroToDollar,fromYenToPound,fromDollarToYen} = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
   
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    
})
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
   
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.0)).toBe(319.75);
})
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
   
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(4.0)).toBe(0.02501954652071931); 
    
})