class Employee {
    constructor (name,department) {
        this.name = name;
        this.department = department;

    }
};
const employee = {
describe () {
return `${this.name} works in ${this.department}`;


}
};
const James = Object.create (employee);
James.name = "James"
James.department = "Marketing"

console.log (James.describe());

const emp1 = new Employee ("Juan", "Accounting");
const emp2 = new Employee ("Jason", "Analytics");
const emp3 = new Employee ("Jorge", "Sales")

class Manager extends Employee {
    constructor (teamSize, name, department){
    super(name, department)
        this.teamSizec = teamSize
    }
}
const manager = {
describe () {
return `${this.name} manages ${this.department}`;


}
};

const Nomar = Object.create (manager);
Nomar.name = "Nomar"
Nomar.department = "Production"

console.log (Nomar.describe())

const man1 = new Manager (15, "George", "Accounting")
const man2 = new Manager (26, "Will", "Sales")
const man3 = new Manager (12, "Harry", "Analytics")

