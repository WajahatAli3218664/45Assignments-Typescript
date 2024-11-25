var guestList = ["Asim", "Fahad", "Daniyal", "Ahmed"];
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");
var absentGuest = "Fahad";
var newGuest = "Mahad";
guestList[3] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
console.log("".concat(absentGuest, " is not coming tonight."));
console.log("".concat(newGuest, " is coming. "));
console.log("\n\n--------------- Good News About Today's Dinner Plan -----------------\n\n");
console.log("I have found bigger table for dinner. so, we have more people  who will join us tonight dinner");
guestList.unshift("Amir");
guestList.splice(2, 0, "Wajahat");
guestList.push("Babar");
for (var i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
