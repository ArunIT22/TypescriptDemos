//Type Alias
type StrOrNum = string | number;

// let orderId: string | number;
let orderId: StrOrNum;

orderId = 1001;
orderId = "string";

//console.log(orderId);
//Type Aliase
type orderDtls = { orderId: StrOrNum, orderDate: Date, productName: string };

let orderDetails = (order: orderDtls) => {
    console.log(`Order Id :${order.orderId}\tProduct Name :${order.productName}`)
}

let ord1 = { orderId: "O0001", orderDate: new Date(), productName: "Pencil" };
let result = orderDetails(ord1);

let res2 = orderDetails({ orderId: 10001, orderDate: new Date(), productName: "Speaker" });




