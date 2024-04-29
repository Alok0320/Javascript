// switch case redux mein bhot helpful hota h 
// switch eliminates the writing of a lot if else code


// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = 3

// bhot sare tala(cases) h pr ek chabhi(key) h, aur ye chabhi jis tale mein lg-jayegi(match) vo code execute ho jayega 


switch (month) {
    case 1:
       console.log("January"); 
        break;                 // Shieft + alt + down arrow ------- for duplicate the whole case 1 syntax
    case 2:
       console.log("February"); 
        break;
    case 3:
       console.log("March"); 
         break;  // break nhi hota to case 4 bhi execute ho jata except default case
    case 4:
       console.log("April"); 
        break;

    default:
        console.log("Default case matched")
        break;
}


const mahina = "march"

// bhot sare tala(cases) h pr ek chabhi(key) h, aur ye chabhi jis tale mein lg-jayegi(match) vo code execute ho jayega 


switch (mahina) {
    case "jan":
       console.log("January"); 
        break;                 // Shieft + alt + down arrow ------- for duplicate the whole case 1 syntax
    case "feb":
       console.log("February"); 
        break;
    case "march":
       console.log("March"); 
         break;  // break nhi hota to case 4 bhi execute ho jata except default case
    case "april":
       console.log("April"); 
        break;

    default:
        console.log("Default case matched")
        break;
}

