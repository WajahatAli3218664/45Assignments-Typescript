var guestList = ["Asim", "Fahad", "Daniyal", "Ahmed"];
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");
var absentGuest = "Daniyal";
var newGuest = "Asim";
guestList[3] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }   
console.log("".concat(absentGuest, " is not coming tonight."));
console.log("".concat(newGuest, " is coming. "));
console.log("\n\n--------------- Good News About Today's Dinner Plan -----------------\n\n");
console.log("I have found bigger table for dinner. So, we have more people who will join us tonight dinner");
guestList.unshift("Rizwan");
guestList.splice(2, 0, "Shadab");
guestList.push("Amir");
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// } 
console.log("\nOH!!! We are late and we've lost our reservation and now only two people are invited for dinner.\n");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", you are not invited."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are still invited.\n\n", "Thankyou", "\n*************\n");
}
guestList.splice(0, 2);
console.log(guestList);
