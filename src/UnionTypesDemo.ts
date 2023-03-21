//Union Types
let uid: string | number | boolean;
uid = "E001";
uid = 1001;
uid = true;

//arrays
let data: (string | number | boolean)[] = [];
data.push("Pen");
data.push(100);
data.push(true);
data.push(5000.66);

console.log(data);

//object 
let empData: { empId: string | number, name: string };//declare of object

empData = { empId: 100, name: 'Sanjay' };
console.log(empData);
empData = { empId: "E1001", name: 'Sanjay' };
console.log(empData);
