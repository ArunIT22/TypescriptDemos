// function productDetails(prodId) {
//     console.log(prodId);
// }
// productDetails(1001);
// productDetails("P1001");
// function prodDetails(prodId: number, prodName: string, price: number = 1000, prodStatus?: boolean): string {
//     return `Product Id :${prodId}\tName :${prodName}\tPrice :${price}\tStatus :${prodStatus}`;
// }
//Rest Parameter
function prodDetails(prodId, prodName, price, prodStatus) {
    if (price === void 0) { price = 1000; }
    var colors = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        colors[_i - 4] = arguments[_i];
    }
    return "Product Id :".concat(prodId, "\tName :").concat(prodName, "\tPrice :").concat(price, "\tStatus :").concat(prodStatus, "\nColors :").concat(colors);
}
console.log(prodDetails(1, "Mouse", 5000, true, "Yellow", "Red", "Blue"));
//console.log(prodDetails(2, "Keyboard", 2500));
//console.log(prodDetails(3, "WebCam"));
//Arrow Functions
// function welcome() {
//     console.log("Hello WOrld!!!");
// }
var welcome = function () { return console.log("Hello World!!!"); };
welcome();
// let addNumber = (x: number, y: number) => { return "Hello"; };
var addNumber = function (x, y) { return x + y; };
console.log(addNumber(10, 3));
