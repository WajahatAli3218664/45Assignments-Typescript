let guestList: string[] = ["Asim", "Fahad", "Daniyal", "Ahmed"]
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }
// console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");

let absentGuest: string = "Ahmed"
let newGuest: string = "Rizwan"
    guestList[3] = newGuest;
    // for(let i=0; i<guestList.length; i++){
    //     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
    // }   
    // console.log(`${absentGuest} is not coming tonight.`);
    // console.log(`${newGuest} is coming. `);
    
// console.log("\n\n--------------- Good News About Today's Dinner Plan -----------------\n\n");

// console.log("I have found bigger table for dinner. So, we have more people who will join us tonight dinner");

guestList.unshift("Shehryar");
guestList.splice(2, 0, "Wajahat" );
guestList.push("Sufyan");

// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// } 
// console.log("\nOH!!! We are late and we've lost our reservation and now only two people are invited for dinner.\n");

while(guestList.length > 2){
 let removeGuest = guestList.pop();
//  console.log(`Sorry ${removeGuest}, you are not invited.`);
} 
// for(let i=0; i<guestList.length; i++){
    //  console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are still invited.\n\n","Thankyou","\n*************\n");
    //  } 
     guestList.splice(0, 2)
     console.log(guestList);

// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.

console.log(`Number of guests on tonight dinner are: ${guestList.length} `);
