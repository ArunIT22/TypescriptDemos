

// function productDetails(prodId) {
//     console.log(prodId);
// }

// productDetails(1001);
// productDetails("P1001");

// function prodDetails(prodId: number, prodName: string, price: number = 1000, prodStatus?: boolean): string {
//     return `Product Id :${prodId}\tName :${prodName}\tPrice :${price}\tStatus :${prodStatus}`;
// }

//Rest Parameter
function prodDetails(prodId: number, prodName: string, price: number = 1000, prodStatus?: boolean, ...colors: string[]): string {
    return `Product Id :${prodId}\tName :${prodName}\tPrice :${price}\tStatus :${prodStatus}\nColors :${colors}`;
}

//console.log(prodDetails(1, "Mouse", 5000, true, "Yellow", "Red", "Blue"));
//console.log(prodDetails(2, "Keyboard", 2500));
//console.log(prodDetails(3, "WebCam"));

//Arrow Functions
// function welcome() {
//     console.log("Hello WOrld!!!");
// }

let welcome = () => console.log("Hello World!!!");

welcome();

// let addNumber = (x: number, y: number) => { return "Hello"; };
let addNumber = (x: number, y: number) => { return x + y; };
//console.log(addNumber(10, 3));

//fixed array
//let arr: number[] = [1, 2, 4, 5, 6, 7];
let arr: [number, number, number] = [200, 3400, 400];
let arr2: [string, number, boolean] = ["Hello", 500, true];
console.log(arr2);

