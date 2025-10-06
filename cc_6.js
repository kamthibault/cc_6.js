class Employee {
    constructor (name,department) {
        this.name = name;
        this.department = department;

    }
}
const Employee = {
describe () {
return `${this.name} works in ${this.department}`;


}
};

const emp1 = new Employee ("Juan", "Accounting");
const emp2 = new Employee ("Jason", "Analytics");
const emp3 = new Employee ("Jorge", "Sales")

class Manager extends Employee {
    constructor (teamSize, name, department){
    super(name, department)
        this.teamSizec = teamSize
    }
}

const man1 = new Manager (15, "George", "Accounting")
const man2 = new Manager (26, "Will", "Sales")
const man3 = new Manager (12, "Harry", "Analytics")

