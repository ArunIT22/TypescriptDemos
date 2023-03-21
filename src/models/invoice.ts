export class Invoice {
    constructor(
        private clientName: string,
        public details: string,
        public amount: number
    ) { }

    displyay(): string {
        return `${this.clientName} has paid of Rs.${this.amount} for ${this.details}`;
    }
}
