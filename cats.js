//using async to make function a promise
async function apiFunction() {
  //I am fetching inside the apiFunction
  let cat = await fetch(
    "http://thecatapi.com/api/images/get?format=src&type=gif"
  ).then((result) => {
    console.log(result.url);
    //logs only the URL in the console
  });
}

//calling function
apiFunction();
