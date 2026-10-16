 /* console.log("Hello") */
/* let temperatura = [18, 20, 22, 21];

console.log(temperatura[0]); // 18

console.log(temperatura[2]); // 22

console.log(temperatura.length); // 4

let gradovi = ["Zagreb", "Split", "Osijek"]; */

/* console.log(gradovi[1]);  */


/* console.log("Prvi zadatak")
for(let i=1; i<11; i++){
    console.log(i);
} */

/* console.log("Drugi zadatak");
let n=prompt("Unesi broj");
let zbroj = 0;
for(let i=1; i<n; i++){
    zbroj += i;
}
console.log(zbroj); */

/* console.log("Treći zadatak");
let ocj = [5,4,4,2,3,4,5,3];
let zbroj = 0;
let prosjek = 0;
for(let i = 0; i<ocj.length; i++){
    zbroj += ocj[i];
}
prosjek = zbroj / ocj.length;
console.log(prosjek); */

/* console.log("Četvrti zadatak")
let n= prompt("Unesi broj:");
for(let i = 1 ; i<n; i++){
    if(i % 2 ===0){
        console.log(i,"Paran");
    }
    else{
        console.log(i,"Neparan");
    }
} */

/* console.log("Peti zadatak");
let polje = [12,7,25,4,19];
let najveci = polje[0];
for(let i = 0;i<polje.length; i++){
    if(najveci < polje[i]){
        najveci=polje[i];
    }
}
console.log(najveci); */

console.log("Šesti zadatak");
let polje = [12,7,25,4,19];
let n = prompt("Potražite broj:");
for(let i = 0; i<polje.length; i++){
    if(n===polje[i]){
        console.log("Broj je pronadjen.");
    }
}