
/*
Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.
*/

"use strict";

let bernadrsize = 1.69;
let bernardweight = 78;

let marcelsize = 1.95;
let marcelweight = 92;

let bernardIMC = bernardweight / (bernadrsize * bernadrsize);
let marcelIMC = marcelweight /(marcelsize * marcelsize);

console.log(bernardIMC);
console.log(marcelIMC);

let bernardHigherIMC = bernardIMC > marcelIMC ;
console.log(bernardHigherIMC);

if (bernardIMC > marcelIMC) {
    console.log("Bernard a un IMC (" + bernardIMC + ") plus élevé que Marcel (" + marcelIMC +")");
} 
else {
    console.log("Marcel a un IMC plus élevé que Bernard");
}
function getIMCCategory(IMC) {
    if (IMC < 18.5) {
        return "insuffisance pondérale" ;
    }
    else if (IMC < 25) {
        return "corpulence normale" ;
    }
    else if (IMC < 30) {
        return "surpoids";
    }
    else {
        return "obésité"
    }
}
console.log("Bernard : " + getIMCCategory());
console.log("Marcel : " + getIMCCategory());
