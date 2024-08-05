let number = prompt("Please enter a number of atleast 3 digits.");
//validation input not less than 3
let myArray = number.split("");
//if I remove the answer and temp values my code doesn't work.
let firtDigit = myArray[0];
var answer = "";
var temp = "";
/* Wasn't sure what variable to declare and increase in the loop.
Used stack overflow as guid:
https://stackoverflow.com/questions/71552939/how-to-swap-first-and-last-digits-of-a-number-using-for-loop-in-javascript */
// for (let i = 1; i < myArray.length; i++) {
//   if (i === 0) temp = myArray[i];
//   else if (i === myArray.length - 1) {
//     answer = answer + temp;
//     answer = myArray[i] + answer;
//   } else answer = myArray[i] + answer;
// }
for (let i = 0; i < myArray.length; i++) {
  if (i == 1) {
    let temp = myArray[i];
    myArray[i] = myArray[myArray.length - 1];
    myArray[myArray.lentgh - 1] = temp;
    break;
  }
}
let final = myArray.join("");
console.log(final + " and " + firtDigit + answer);
