const accountId = 1456
let accountEmail = "avni@gmail.com"
var accountPassword = "12234"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed

accountEmail = "as@gmail.com"
accountPassword = "2312"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to usse var
because of isue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
