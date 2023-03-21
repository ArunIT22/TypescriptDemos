// let orderId: string | number;
let orderId;
orderId = 1001;
orderId = "string";
let orderDetails = (order) => {
    console.log(`Order Id :${order.orderId}\tProduct Name :${order.productName}`);
};
let ord1 = { orderId: "O0001", orderDate: new Date(), productName: "Pencil" };
let result = orderDetails(ord1);
let res2 = orderDetails({ orderId: 10001, orderDate: new Date(), productName: "Speaker" });
