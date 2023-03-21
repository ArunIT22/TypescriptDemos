import { Invoice } from './models/invoice'

let inv1 = new Invoice("Priya", "ordering food", 600);
let inv2 = new Invoice("Sanjay", "ordering mobile", 60000);

let invoices: Invoice[] = [];
invoices.push(inv1);
invoices.push(inv2);

invoices.forEach(x => {
    console.log(x.displyay());
})