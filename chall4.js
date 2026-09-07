let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
console.log("salaire de base : " + employee.salary + " DH")
console.log("Le bonus : " + employee.bonus + " DH")
let tax = employee.absenceDays * 200
console.log("Les pénalités : " + tax + " DH")
let total = employee.salary + employee.bonus - tax
console.log("Le salaire final est : " + total + " DH")
