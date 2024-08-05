let myPromise = new Promise(function (myResolve, myReject) {
  let items = [];

  //guided by example in notes
  fetch("https://pokeapi.co/api/v2/pokemon/gengar/")
    .then((res) => res.json())
    .then((result) => {
      items = result;

      //checks if item variable is not empty
      if (items != null) {
        myResolve(items);
      } else {
        myReject("Error");
      }
    });
});

myPromise.then(
  function (value) {
    //used template literals for exact output
    console.log(
      `Name:
        ${value.name}
Weight:
        ${value.weight}
Abilities:
        ${JSON.stringify(value.abilities)}`
    );
    //had to use JSON.stringify, because output was [object,object]
  },
  function (error) {
    return error;
  }
);
