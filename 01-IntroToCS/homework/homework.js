'use strict';

function BinarioADecimal(num) {
   var aux = num.split("").reverse();
   var decimal = 0
   for(var o = 0;o<aux.length;o++){
    decimal = decimal + aux[o] * Math.pow(2,o)
   }
   return decimal
}

function DecimalABinario(num) {
   var binario = [];
var n = num;
for(var i = 0;i<num;i++){
   if(n < 1) return binario.join("");
   if(n % 2 === 0){
      binario.unshift(0);
      n = n / 2;
   }else{
      binario.unshift(1);
      n = Math.floor(n) / 2;
   }
}
   return binario.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
