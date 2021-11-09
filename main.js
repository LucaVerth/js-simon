/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numbers = 5;
let randomNumArr = randomArr();

const output = document.querySelector('#output');

output.innerHTML = randomNumArr;

console.log(randomNumArr);

function randomArr() {
  const randomNumArr = [];
  while (randomNumArr.length < numbers) {
     const number = randomNumberInt(1, 100)
    if (!randomNumArr.includes(number)) randomNumArr.push(number);
  }
  return randomNumArr;
}


function randomNumberInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}