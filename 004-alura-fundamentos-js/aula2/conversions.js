// implicit
const myNumber = 12;
const myStringNumber = "12";
console.log(myNumber == myStringNumber); // true

// explicit
console.log(myNumber + Number(myStringNumber)); // 24
console.log("Concat with a string " + String(myNumber));
console.log("Concat with a string " + myNumber.toString());