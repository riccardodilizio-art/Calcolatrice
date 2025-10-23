/*const SECONDI_IN_GIORNI = 24*60*60;
console.log(SECONDI_IN_GIORNI);

let x;
x = 10;

let y = 10;

const PROVA = 10;

let nome1 = "Luca"
let nome2 = "Mario"
let cognome1 = "Rossi"
let cognome2 = "Rossi"
let eta1 = 25;
let eta2 = 25
console.log("Nome persona "+nome1+" cognome: "+ cognome1 +" età "+ eta1);

nome2 = nome1;

let chiave = Symbol("Chiave");
chiave.description
console.log(chiave.description.length)
*/
//Esercizi tipi di dato
//1)
let x = "100";
let y = 25;
let somma = Number (x) + y;
console.log(somma);

let nulla = null;
console.log(nulla);
let nonDefinita;
console.log(nonDefinita);

let cognomi = ["Di Lizio", "Rossi", "Giampieri", "Micozzi"]

console.log(cognomi);

let libro = {
    id: 1,
    nome : "La tana",
    Autore: "Pippo",
};
console.log(libro.nome);

console.log(typeof (libro.nome));
let online = true
console.log("Sei online? " + online);
////
let decimale1 = 20.9;
let decimale2 = 20.1;

console.log(decimale1 * decimale2);

let increment = 90;
increment +=10;
console.log(increment);

let bigint1 = BigInt (9000000000000000);
let bigint2 = 1234567890123456n
console.log(bigint1);
console.log(bigint2);

console.log(Number.isInteger(bigint2));
console.log(Number.isInteger(increment));

console.log(10/"Ciao")


const str = "I am learning JavaScript.";
console.log(str.indexOf("Javascript"));

//console.log(prompt("CIao","Admin"))


///
/*let stringa1 = "Prova1"
let stringa2 = 'Prova2'
let stringa3 = `Prova3`

let stringaMultiLinea = `stringa
multilinea
aa`

console.log(stringa1.concat(" ", stringa2))
*/
let nome = "riccardo"
let cognome = "di lizio"
console.log(`Il mio nome è ${nome.toUpperCase()} e il mio cognome è: ${cognome.toUpperCase()}`);

console.log(nome.replaceAll("a","w"));

console.log(nome.match("riccardo"));
console.log(cognome.split(" "))


let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);

let trimStringa = "   c i a o       "


console.log(trimStringa.trim());

let phrase = "freeCodeCamp is awesome!";
let updatedPhrase = phrase.replace("freecodecamp", "fCC");

console.log(updatedPhrase);

/*let numeroN = -4;
console.log(numeroN.repeat(numeroN));
*/
console.log("*".repeat(0))

console.log("somma" + 2 + true);

console.log(5 == "5" ? "Si" : "no");

let xm = 8;  // Binary: 1000
console.log(xm << 2);

let min = 1;
let max =100;
let randomNum2 = Math.random() * (max - min) + min;
console.log(Math.round(randomNum2));

console.log(Math.round(Math.random(1,6)));
console.log (isNaN(NaN))

console.log(isNaN(7));
console.log(5 === 2 + 3 || 4 == 2);


if (1) {
    console.log("True!");
}

const a = 2;
if (1 == "1") {
    let b = 3;
    console.log(a + b);
}
//console.log(b);


let vehicle = "car";

switch (vehicle) {
    case "bike":
        console.log("Bikes are two-wheelers.");
        break;
    case "car":
        console.log("Some cars are 4x4.");
    case "truck":
        console.log("Trucks can carry heavy loads.");
        break;
    default:
        console.log("Unknown vehicle.");
}


let codiceFiscale = "DLZRCR04P18C632D"
console.log(codiceFiscale.split(", "))
console.log(codiceFiscale);
console.log(codiceFiscale.length)
console.log(codiceFiscale.indexOf("M"))
console.log(codiceFiscale.slice(0,2))
let arr = [1,2,3,4]
arr.unshift(4)
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.sort())