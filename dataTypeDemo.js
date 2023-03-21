//variables
//string, number, boolean
var empName = 'Kavin';
//empName = 50;
var empId = 4000;
var isAvilable = true;
//explicit types
var prodId;
var prodName;
var isInStock;
var price;
prodId = 1000;
//prodId = "10001";
prodName = "Tooth Brush";
price = 5000.666;
isInStock = true;
console.log("Product Id :" + prodId);
console.log("Product Id :".concat(prodId, "\tProduct Name :").concat(prodName));
//Arrays
var numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//Explicit array
var cities = [];
cities[0] = "Mumbai";
cities[1] = "Chennai";
cities[3] = "Hyderabad";
//console.log(cities);
cities.push("Delhi");
cities.push("Trivandrum");
//console.log(cities);
cities.pop();
//console.log(cities);
cities[1] = "Jaipur";
cities.forEach(function (x) {
    console.log(x);
});
//Objects
var userDetails = { uid: 1001, name: 'Kavin', age: 50 };
//userDetails = 100;
userDetails = { uid: 1002, name: 'Kayal', age: 20 };
console.log("User Id " + userDetails.uid);
