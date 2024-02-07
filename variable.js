var x = 10;
console.log(x);
var y = 5;
x = 50;

console.log(x, y);


//wow
//Problem-01 : Help The Zoo Manager
/*function signature/sample */
function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number' || ticketSale < 0) {
      return "Invalid Number";
    }
  
    const ticketPrice = 120;
    const totalRevenue = ticketSale * ticketPrice;
    const totalExpenses = 500 + 8 * 50;
    const calculateMoney = totalRevenue - totalExpenses;
  
    return calculateMoney;
  }
 
  

//Problem-02: Good Name , Bad Name
/*function signature/sample */
function checkName(name) {
if (typeof name !== 'string') {
  return "invalid";
}

const lastChar = name.charAt(name.length - 1).toLowerCase();

if (lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
  return "Good Name";
} else {
  return "Bad Name";
}
}



//Problem 03 : Virus in my Array
/*function signature/sample */
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "Invalid Array";
    }
  
    const filteredArray = array.filter(element => typeof element === "number" && !isNaN(element));
  
    return filteredArray;
  }





//Problem 04 : Make A Great Password     
/*function signature/sample */
 function password(obj) {
if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || !Number.isInteger(obj.birthYear) || obj.birthYear.toString().length !== 4) {
return "invalid";
}

const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
const userName = obj.name;
const birthYear = obj.birthYear;
const generatedPassword = `${websiteName}#${userName}@${birthYear}`;

return generatedPassword;
}



//Problem 05 : Monthly Savings of a Freelancer
/*function signature/sample */
function monthlySavings(arr, livingCost) {
if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return "invalid input";
}

const totalIncome = arr.reduce((acc, payment) => acc + payment, 0);

const totalSavings = totalIncome - (totalIncome > 3000 ? 0.2 * (totalIncome - 3000) : 0);

const finalSavings = totalSavings - livingCost;

if (finalSavings >= 0) {
    return finalSavings;
} else {
    return "earn more";
}
}



