// Exercises: Level 3
// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName : "Ajay",
    lastName : "Godara",
    income : 50000,
    dividend : 10000,
    inceentives: 5000,
    expense : 15000,
    rent : 6000,
    food : 5000,

    totalIncome : function () {
        return `Your Total income is: ${this.income+this.dividend+this.inceentives}`;
    },

    totalExpense : function () {
        return `Your total expense is: ${this.expense+this.rent+this.food}`
    },

    accountInfo : function () {
        return `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nIncome: ${this.income}`
    },

    addIncome : function () {
        return `Your Total income is: ${this.income+this.dividend+this.inceentives}`;
    },

    addExpense : function () {
        return `Your total expense is: ${this.expense+this.rent+this.food}`
    },

    aaccountBalance : function () {
        return `${this.totalIncome-this.totalExpense}`
    }
}
// console.log(personAccount.accountInfo());
// console.log(personAccount.addIncome());

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    
// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const prompt = require("prompt-sync")();
const signUp = () => {
    let newUser = prompt("Enter your Name");
    // string = "firstName:name1, lastName:last1"; 
    // obj = {firstName:name1, lastName:last1}

    let newUserObj = {username: newUser};
    for (let i=0; i<=users.length; i++){
        for (let obj of users) {
            if (newUser == obj.username) {
                console.log("You already have an account");
                break;
            } else {
                users.push(newUserObj);
                console.log("Account created")
                break;
            }
        }
        break;
    }
    console.log(users)
}
// signUp()

// const signUp = () => {
//     let newUser = prompt("Enter your Name");
//     for (obj of users) {
//         const keys = Object.keys(users[obj]);
//         console.log(keys)
//         if (newUser == users[obj].username) {
//             console.log("You already have an account");
//         } else {
//             users.newUser;
//             console.log("Account created")
//         }
//     }
// }
// signUp();
// b. Create a function called signIn which allows user to sign in to the application
// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt:'08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },]
const signIn = () => {
    let name = prompt("Enter your Name");
    let pass = prompt("Enter your Password");

    for (let i=0; i<=users.length; i++){
        for (let obj of users) {
            if (name == obj.username && pass == obj.password) {
                console.log(`Hello ${name}`);
                break;
            } else {
                console.log("404: Account not Found")
                break;
            }
        }
        break;
    }
}
// signIn()

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

const rateProduct = () => {
    let productName = prompt("Enter product name to rate");
    let rating = prompt("Rate product from 1-5");
    
    for (let product of products) {
        if (productName === product.name) {
            product.ratings.push({userId: 'ab12ex', rate: parseInt(rating)});
            console.log("Product rated successfully");
            return;
        }
    }
    console.log("Product not found");
}
// rateProduct()

const averageRating = () => {
    let productName = prompt("Enter product name");
    
    for (let product of products) {
        if (productName === product.name) {
            if (product.ratings.length === 0) {
                console.log("No ratings yet");
                return;
            }
            
            let sum = 0;
            for (let rating of product.ratings) {
                sum += rating.rate;
            }
            let average = sum / product.ratings.length;
            console.log(`Average rating: ${average.toFixed(1)}`);
            return;
        }
    }
    console.log("Product not found");
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// let productLike = 0;
// {
//     _id: 'hedfcg',
//     name: 'TV',
//     description: 'Smart TV:Procaster',
//     price: 400,
//     ratings: [{ userId: 'fg12cy', rate: 5 }],
//     likes: ['fg12cy']
//   }
const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ];

const likeProduct = () => {
    let name = prompt("Enter the product name: ");
    for (let i=0; i<=products.length; i++){
        for (let obj of products) {
            if (name == obj.name) {
                // console.log("yes")
                if(obj.likes == "") {
                    likes = 1;
                    console.log("Product Liked");
                } else {
                    likes = 0;
                    console.log("Product Unliked");
                }
                break;
            } 
            // else {
            //     console.log("404: Product not Found")
            //     // break;
            // }
        }
        break;
    }    
}
likeProduct()