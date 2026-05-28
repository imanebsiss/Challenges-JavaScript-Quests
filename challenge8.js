

function calcTip (bills) {
    if ( bills >= 50 && bills <= 300) {
        let tip = (bills * 15) / 100 ;
        return tip ;
    }
    else  {
        let tip = (bills * 20) / 100 ;
        return tip ;
    }
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let totals = [];
let tips = [];

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip)
}

console.log(`La note est : ${bills}`);
console.log(`Le pourboire est : ${tips}`);
console.log(`Le total est : ${totals}`);

function calcAverage (array) {
    let sum = 0 ;
for( let i =0; i < array.length; i++) {
    sum = sum + array[i];
}
    let avrg = sum / array.length;
    return avrg
}

console.log(calcAverage(totals));