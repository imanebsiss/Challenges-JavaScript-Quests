

/*
Données de test :
Valeur de la note : 275, 40 et 430
*/

"use strict";

let invoice = 430;

if ((invoice <= 300) && (invoice >= 50)) {
    let tip = (invoice * 15) / 100;
}
else {
    tip = (invoice * 20) / 100;
}
let totalValue = invoice + tip;
console.log("La note était de " + invoice + ", le pourboire de " + tip + " et la valeur totale était de " + totalValue);
