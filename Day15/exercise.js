// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    console.log(this);
  }
//   get getname() {
//     return this.name;
//   }
//   set setage(age) {
//     this.age += age;
//   }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    greet() {
        console.log("Greet from Dog")
    }
}
class Cat extends Animal{
}

const Jackeydog = new Dog("Jackey", 15, "z-black", 4);
console.log(Jackeydog)
console.log(Jackeydog.greet())

const Mcat = new Cat("Manno Billi", 2, "Golden", 4);
console.log(Mcat)
// console.log(cat.getname);
// cat.setage = 20;
// console.log(cat)