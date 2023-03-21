"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const invoice_1 = require("./models/invoice");
let inv1 = new invoice_1.Invoice("Priya", "ordering food", 600);
let inv2 = new invoice_1.Invoice("Sanjay", "ordering mobile", 60000);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(x => {
    console.log(x.displyay());
});
