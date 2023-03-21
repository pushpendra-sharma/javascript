var json = '{ "firstName":"John", "lastName":"Doe"}';

// will convert JSON string into an JavaScript object
var nameObj = JSON.parse(json);
// { firstName: "John", lastName: "Doe",}
console.log(nameObj);

var obj = { Java: 70, JavaScript: 80, CSS: 30 };

// will convert object to JSON string
var xyz = JSON.stringify(obj);

// "{"Java":70,"JavaScript":80,"CSS":30}"
console.log(xyz);

console.log(typeof obj); // returns Object
console.log(typeof xyz); // returns String
