let guestList: string[] = ["Asim", "Fahad", "Daniyal", "Ahmed"]
for(let i=0; i<guestList.length; i++){
    console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
}
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");

let absentGuest: string = "Fahad"
let newGuest: string = "Asim"
    guestList[3] = newGuest;
    for(let i=0; i<guestList.length; i++){
        console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
    }   
    console.log(`${absentGuest} is not coming tonight.`);
    console.log(`${newGuest} is coming. `);
    
    