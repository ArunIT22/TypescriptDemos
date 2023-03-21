abstract class Person1 {
    firstName: string;
    lastName?: string;
    public birthDate: Date;

    protected abstract getAge(): number;
}

class CollegeApplication extends Person1 {

    constructor(
        firstName: string,
        birthDate: Date,
        private applicationStatus: boolean,
        lastName?: string,
    ) {
        super();
        super.firstName = firstName;
        super.birthDate = birthDate;
    }

    protected getAge(): number {
        let today = new Date();
        return today.getFullYear() - this.birthDate.getFullYear();
    }

    getApplicationStatus(): void {
        if (this.applicationStatus) {
            console.log(`Name :${this.firstName}\tAge :${this.getAge()} your application has been accepted`);
        }
        else {
            console.log(`Name :${this.firstName} your application has been rejected`);
        }
    }
}

//create an object of college Application
let col1 = new CollegeApplication('Tharun', new Date(2001, 1, 13), false);

col1.getApplicationStatus();
//let dt = new Date();
// console.log(col1.birthDate.getFullYear());

