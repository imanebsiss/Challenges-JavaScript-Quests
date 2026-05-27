


/*
Données de test :
Score Dauphins : 44, 23, 71 / Score Koalas : 65, 54, 49
Score Dauphins : 85, 54, 41 / Score Koalas : 23, 34, 27
*/

const calcAverageDauphines = (a,b,c) => {
    return (a + b + c ) / 3 ;
}
const calcAverageKoalas = (a,b,c) => {
    return (a + b + c ) / 3 ;
}

let scoreDauphines = calcAverageDauphines(44,23,71)  ;
let scoreKoalas = calcAverageKoalas(65,54,49) ;


console.log(calcAverageDauphines(44,23,71));

console.log(calcAverageKoalas(65,54,49));

function checkWinner (scoreDauphines, scoreKoalas) {
    if (scoreDauphines >= scoreKoalas * 2) {
        console.log(" L'équipe Dauphines gagne (" + scoreDauphines + ") Vs (" + scoreKoalas + ")" );
    }

    else if (scoreKoalas >= scoreDauphines* 2) {
        console.log(" L'équipe Koalas gagne (" + scoreKoalas + " Vs" + scoreDauphines);
    }
    else {
        console.log("Aucune équipe n'a gagné");
    }
}
checkWinner(scoreDauphines, scoreKoalas);