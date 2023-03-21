interface Person {
    firstName: string;
    lastName: string;
    birthDate: Date;

    getHobbies(): string;
}

//let bathri: Person = { firstName: 'Bathri', lastName: 'Naarayan', birthDate: new Date(2001, 5, 23) };

class PavanInfo implements Person {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthDate: Date,
        public hobbies: string[]
    ) { }

    getHobbies(): string {
        return `${this.firstName} has the following hobbies :${this.hobbies}`;
    }
}

let pavnanObj = new PavanInfo('Pavan', 'Shyam', new Date(2000, 12, 30), ["Reading", "Swimming"]);
console.log(pavnanObj.getHobbies());