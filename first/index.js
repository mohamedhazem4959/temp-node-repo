const convert = require('convert-units');
const volInLiters = 1;
const volInMl = convert(volInLiters).from("l").to("ml");
console.log(volInMl);