// Exercises

// Level 1

// Create an Animal class with name, age, color, and legs properties. Add a method to describe the animal.
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  greet() {
    console.log(`${this.name} hi`);
  };
}

class Dog extends Animal {
    greet() {
        console.log(`${this.name}Ram ram`)
    }
}
const dog = new Dog("ja", 18, "black", 4);
console.log(dog.greet());

// Create Dog and Cat classes that extend the Animal class. Add a unique method for each.

// Level 2

// Override the method you created in the Animal class in both Dog and Cat classes.

// Level 3

// Create a Statistics class to compute:
// Count, Sum, Min, Max, Range, Mean, Median, Mode, Variance, Standard Deviation, and Frequency Distribution from an array.
// Create a PersonAccount class with:
// Properties: firstname, lastname, incomes, expenses
// Methods: totalIncome(), totalExpense(), accountInfo(), addIncome(), addExpense(), accountBalance().
