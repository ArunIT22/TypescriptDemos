//let bathri: Person = { firstName: 'Bathri', lastName: 'Naarayan', birthDate: new Date(2001, 5, 23) };
class PavanInfo {
    constructor(firstName, lastName, birthDate, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getHobbies() {
        return `${this.firstName} has the following hobbies :${this.hobbies}`;
    }
}
let pavnanObj = new PavanInfo('Pavan', 'Shyam', new Date(2000, 12, 30), ["Reading", "Swimming"]);
console.log(pavnanObj.getHobbies());
