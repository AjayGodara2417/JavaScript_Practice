// Exercises Level 2
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    console.log(this);
  }
}

// Create a Dog and Cat child class from the Animal Class.
//   class Dog extends Animal {
//       greet() {
//           console.log("Greet from Dog")
//       }
//   }
//   class Cat extends Animal{
//   }

//   const Jackeydog = new Dog("Jackey", 15, "z-black", 4);
//   console.log(Jackeydog)
//   console.log(Jackeydog.greet())

//   const Mcat = new Cat("Manno Billi", 2, "Golden", 4);
//   console.log(Mcat)
// Override the method you create in Animal class
// class Dog extends Animal {
//     constructor(name, age, color, legs, breed) {
//         super(name, age, color, legs);
//         this.breed = breed;
//     }

//     makeSound() {
//         return 'Woof Woof';
//     }
// }

// class Cat extends Animal {
//     constructor(name, age, color, legs, breed) {
//         super(name, age, color, legs);
//         this.breed = breed;
//     }

//     makeSound() {
//         return 'Meow Meow';
//     }
// }

// const jackeyDog = new Dog("Jackey", 15, "z-black", 4, "Labrador");
// console.log(jackeyDog);
// console.log(jackeyDog.makeSound());

// const mCat = new Cat("Manno Billi", 2, "Golden", 4, "Persian");
// console.log(mCat);
// console.log(mCat.makeSound());
class Human {
  constructor(weapon) {
    this.weapon = weapon;
    this.health = 100;
  }
  receiveDamage() {
    this.health = this.health - 10;
  }
}
class Wizard extends Human {
  receiveDamage() {
    this.health = this.health - 5;
  }
}
const wizard = new Wizard("staff");
console.log(wizard.health);
wizard.receiveDamage();
console.log(wizard.health);
