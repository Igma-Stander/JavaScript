let myArray = [5, 10, 6];

//used arr as placeholder for an array
function findSum(arr) {
  return arr[0] + arr[1] + arr[2];
}

//used return instead of console.log so that there is no undefined
function subtractNumbers(arr) {
  return arr[0] - arr[1];
}

//multiplying the third number with the first number in the array
function multiplyNumbers(arr) {
  return arr[2] * arr[0];
}

function divideNumbers(arr) {
  //if statement for incase devided by 0
  if (arr[1] !== 0) {
    return arr[0] / arr[1];
  } else {
    return 0;
  }
}

//logging all the functions
console.log(findSum(myArray));
console.log(subtractNumbers(myArray));
console.log(multiplyNumbers(myArray));
console.log(divideNumbers(myArray));
