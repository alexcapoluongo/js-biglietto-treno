// chiedere km di viaggio
// chiedere età passeggero

const kmTravel = parseInt(prompt('inserisci i chilometri che vuoi percorrere'));
console.log(kmTravel);
const userAge = parseInt(prompt('inserisci la tua età'));
console.log(userAge);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = (kmTravel * 0.21);
console.log(price);
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
let discount;

if (userAge < 18){
    discount = (price * 0.2);
    console.log(`your discount is ${discount}`);
} else if (userAge > 65) {
    discount = (price * 0.4);
    console.log(`your discount is ${discount}`);
} else {
    discount = 0;
    console.log(`you have to pay a full price`);
}

// arrotondare a due cifre il prezzo finale

const finalPrice = (price - discount).toFixed(2);
console.log(`your final price is ${finalPrice}`);

// stampare il risultato

document.getElementById('result').innerHTML = `the ticket will cost ${finalPrice}`