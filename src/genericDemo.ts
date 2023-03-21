// function example(id: string): string {
//     console.log(id);
//     return id;
// }

// example("10001");
//example(10001);

// //generic Functions
// function example<X>(id: X): X {
//     console.log(id);
//     return id;
// }

// example("10001");
// example(10001);
// example(true);

//generic Class
class Sum<T>{
    add: (x: T, y: T) => T;
}

let numObj = new Sum<number>();
let resNum = numObj.add = (x, y) => x + y;
console.log(resNum(10, 3));

let strObj = new Sum<string>();
let resStr = strObj.add = (x, y) => x + y;
console.log(resStr("Hello ", "World!!!"));
