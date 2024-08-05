function Shoes(name, productCode, quantity, valuePerItem) {
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

//creating 5 instances
let shoe1 = new Shoes("Nike", "N154S", 1, "R1300");
let shoe2 = new Shoes("Puma", "P076X", 1, "R1100");
let shoe3 = new Shoes("Adidas", "A118", 1, "R1200");
let shoe4 = new Shoes("Reebok", "RB369", 1, "R1050");
let shoe5 = new Shoes("Converse", "C882", 1, "R800");

//pushing into an array
let shoeArray = [shoe1, shoe2, shoe3, shoe4, shoe5];
temp = 0;

//function to find any shoe by productCode
function anyShoe(array) {
  for (let i = 0; i < shoeArray.length; i++) {
    if (shoeArray[i].productCode == "A118") {
      return shoeArray[i];
    }
  }
}
console.log(anyShoe());

//function to find highest value per item
//used example in notes as guide
function highestValue(array) {
  array.sort((firstShoe, secondShoe) =>
    firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1
  );
  console.table(array[0].valuePerItem);
}
highestValue(shoeArray);

//function to find lowest value
function lowestValue(array) {
  array.sort((firstShoe, secondShoe) =>
    firstShoe.valuePerItem < secondShoe.valuePerItem ? -1 : 1
  );
  console.table(array[0].valuePerItem);
}
lowestValue(shoeArray);

//editing properties one by one
function edit(array) {
  shoe1.name = "Vans";
  shoe2.productCode = "PK55";
  shoe3.quantity = 2;
  shoe4.valuePerItem = "R1150";
  shoe5.productCode = "ALL99";
  console.table(shoeArray);
}
edit(shoeArray);

//used for loop to compare and then switch positions
function ascendingOrder(array) {
  for (i = 0; i < array.lenght; i++) {
    if (shoeArray[i] > shoeArray[j]) {
      temp = shoeArray[j];
      shoeArray[j] = shoeArray[i];
      shoeArray[i] = temp;
    }
  } //used reverse because it was in descending order
  console.table(shoeArray.reverse());
}
ascendingOrder(shoeArray);

//both code does the same

// function ascendingOrder(a, b) {
//   return a.valuePerItem - b.valuePerItem;
// }
// shoeArray.sort(ascendingOrder);
// console.table(shoeArray);
