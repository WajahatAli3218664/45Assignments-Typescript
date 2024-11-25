var guestList = ["Asim", "Fahad", "Daniyal", "Ahmed"];
for (var i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");
var absentGuest = "Fahad";
var newGuest = "Asim";
guestList[3] = newGuest;
for (var i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
console.log("".concat(absentGuest, " is not coming tonight."));
console.log("".concat(newGuest, " is coming. "));
