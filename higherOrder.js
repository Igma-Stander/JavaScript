//array with 3 words that are 6 letters long
let firstArray = [
  "spray",
  "elite",
  "destruction",
  "bottle",
  "today",
  "couple",
  "candy",
  "bird",
  "casual",
  "land",
];

//guided by:https://www.youtube.com/watch?v=7-oIxkcAkHs
Array.prototype.myFilterFunction = function (callBack) {
  //new array to return modify elements
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    // the current element,its index and the original array
    if (callBack(this[i], i, this)) {
      //push into new array
      filtered.push(this[i]);
    }
  }
  return filtered;
};

//testing if length of elements in array are equal to 6
console.log(firstArray.myFilterFunction((six) => six.length == 6));
