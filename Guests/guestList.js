let guest = [];

//loop until we have 11 names
for (let i = 0; i <= 10; i++) {
  guest.push(prompt("Enter the names of 11 guests you would like to invite."));
}

//adding toLowerCase at the end so that answer is always returned in the same case
let answer = prompt(
  "You can only add a maximum of 10 people to your guest list. Would you like to replace someone on the list with the last person you entered? yes/no:"
).toLowerCase();
if (answer === "yes") {
  let guestName = prompt(
    "Please enter the name of the person you would like to replace."
  );
  let position = guest.indexOf(guestName);
  let name = guest.pop(guestName);
  guest.splice(position, 1, name);
  console.log(guest.toString());
} else {
  guest.pop();
  console.log(guest.toString());
}
//used .toString to get separation with commas
