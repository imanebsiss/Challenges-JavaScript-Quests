
function calcTip (invoice) {
    if ( invoice >= 50 && invoice <= 300) {
        let tip = (invoice * 15) / 100 ;
        return tip ;
    }
    else  {
        let tip = (invoice * 20) / 100 ;
        return tip ;
    }
}
console.log(calcTip(400));

let bills = [125, 555, 44];
let tips =[
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2]),
];

let totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2],
];

console.log(bills);
console.log(tips);
console.log(totals);


