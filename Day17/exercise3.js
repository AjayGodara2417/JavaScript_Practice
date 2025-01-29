// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
localStorage.clear();
const personAccount = {
    firstName : "Ajay",
    lastName : "Godara",
    incomes : 50000,
    expenses : 25000,
    totalIncome : function () {
        return `Your Income: ${this.incomes}`
    },
    totalExpense : function () {
        return `Your Expenses: ${this.expenses}`
    },
    accountInfo : function () {
        return `Your Info: First Name: ${this.firstName}\nLast Name: ${this.lastName}`
    }
}

const perAcc = JSON.stringify(personAccount);
localStorage.setItem("personAccount", perAcc);
localStorage.length
console.log(localStorage);