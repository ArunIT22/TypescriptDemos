//variables
//string, number, boolean
let empName = 'Kavin';
//empName = 50;
let empId = 4000;
let isAvilable = true;

//explicit types
let prodId: number;
let prodName: string;
let isInStock: boolean;
let price: number;

prodId = 1000;
//prodId = "10001";
prodName = "Tooth Brush";
price = 5000.666;
isInStock = true;

console.log("Product Id :" + prodId);
console.log(`Product Id :${prodId}\tProduct Name :${prodName}`);

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
//Explicit array
let cities: string[] = [];
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

cities.forEach(x => {
    console.log(x);
});

//Objects
let userDetails = { uid: 1001, name: 'Kavin', age: 50 };
//userDetails = 100;
userDetails = { uid: 1002, name: 'Kayal', age: 20 };
console.log("User Id " + userDetails.uid);