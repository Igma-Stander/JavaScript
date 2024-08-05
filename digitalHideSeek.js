function hide(hidingSpot) {
  let hideLocation = hidingSpot;
  function seek() {
    return hideLocation;
  }
  return seek;
}
//return seek to make a closure

let startGame = hide("Behind something green.");
console.log(startGame());

console.log(hideLocation);
//The result is hideLocation is not defined.
//This happens because hideLocation is declared in the hide function making it a local scope that only that function can see and use. If we declared it in a global scope outside the function then it could be used.
