"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The
//  function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country = "Pakistan") {
    return `${city},${country}`;
}
console.log(`"Karachi","Pakistan"`);
console.log(`"Lahore"`);
console.log(`"Islamabad"`);
