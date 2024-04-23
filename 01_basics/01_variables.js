const accountId = 144553
let accountEmail = "alokupadhyay0188@gmail.com"
var accountPassword = "12345"
accountCity = "Chandigarh"
let accountState  //undefined

// Above are yhe possibilities 
// accountId = 2 -- not allowed

accountEmail = "ac@gmail.com"
accountPassword = "21212112"
accountCity = "Banglore"

console.log(accountId);

// Below code has used to print all details in one go in tabular form
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
 Prefer not to use var
 because of issue in block scope and functional scope
 */