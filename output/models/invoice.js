"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(clientName, details, amount) {
        this.clientName = clientName;
        this.details = details;
        this.amount = amount;
    }
    displyay() {
        return `${this.clientName} has paid of Rs.${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
