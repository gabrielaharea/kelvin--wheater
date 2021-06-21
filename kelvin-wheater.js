// valiabila kelvin
const kelvin = 293;
//am scazut kelvin
const celsius = kelvin - 273;
console.log(kelvin); 
//exuatie
let fahrenheit = celsius * (9/5) + 32 ;
//am am rotungit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperatura is ${fahrenheit} degrees Fahrenheit`);