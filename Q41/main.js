"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
// the name of each magician in the array.
let magiciansNames = ["Harry Houdini", "David Blaine", "Criss Angel"];
function showMagicians(magicians) {
    magiciansNames.forEach((magiciansNames) => {
        console.log(magiciansNames);
    });
}
showMagicians(magiciansNames);
