/*
Données de test :
Score Dauphins : 96, 108, 89 / Score Koalas : 88, 91, 110
Score Dauphins : 97, 112, 101 / Score Koalas : 109, 95, 123
Score Dauphins :97, 112, 101 / Score Koalas : 109, 95, 106
*/

"use strict";

let scoreDauphines = [97, 112, 101];        
let scorKoalas = [109, 95, 123];

let avrgDauphines = (97+ 112+ 101) / 3 ;          
let avrgKoalas = (109 + 95 + 123) / 3 ;              

console.log("Dauphines : " + avrgDauphines);
console.log("Koalas : " + avrgKoalas);


if ((avrgDauphines >= 100 ) && (avrgDauphines > avrgKoalas)){
    console.log("L'équipe gagnate est : Dauphines");
}
else if ((avrgKoalas >= 100 ) && (avrgKoalas > avrgDauphines)) {
    console.log("L'équipe gagnate est : Les Koalas");
}
else if ((avrgDauphines >= 100) && (avrgKoalas >= 100) && (avrgDauphines === avrgKoalas)){
    console.log("Egalité des deux équipes!");
}
else {
    console.log("Aucune équipe n'a gagné!");
}