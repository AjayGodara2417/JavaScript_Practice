// Task 1:
const library = {
    books: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genres: ["Fiction", "Classic"], isAvailable: true },
      { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genres: ["Fiction", "Drama"], isAvailable: false },
      { title: "1984", author: "George Orwell", year: 1949, genres: ["Dystopian", "Political Fiction"], isAvailable: true },
      { title: "Moby Dick", author: "Herman Melville", year: 1851, genres: ["Adventure", "Classic"], isAvailable: true },
      { title: "The Gatsby", author: "F. Scott Fitzgerald", year: 1925, genres: ["Fiction", "Classic"], isAvailable: true },
    ]
  };

//   Tasks
// Write a function findBooksByGenre(genre) that returns an array of books that belong to the given genre.
const findBooksByGenre = (genre) => {
    return library.books.filter(book => book.genres.includes(genre));
};
// console.log(findBooksByGenre("Fiction"))

// Write a function borrowBook(title) that marks a book as unavailable if it is available. If the book is not available, return "Book is already borrowed".
const borrowBook = (title) => {
    const book =  library.books.filter((book) => book.title === title);
    if (book.isAvailable == true) {
        return `${title} is yours`
    } else {
        return `${title} is already issued`
    }
}
// console.log(borrowBook("1984"))

// Write a function listAvailableBooks() that returns a list of books that are available.
const listAvailableBooks = () => {
        return library.books.filter(book => book.isAvailable)
}
// console.log(listAvailableBooks());

// Write a function addNewBook(title, author, year, genres) that adds a new book to the library object.
const addNewBook = (title, author, year, genres) => {
    library.books.push({title, author, year, genres})
    console.log("Book added")
}
// addNewBook("Ram", "Maharishi", 2025, ["Reality", "Story"])
// console.log(library)

// Write a function getAllAuthors() that returns an array of all unique authors in the library.
const getAllAuthors = () => {
    let auth = library.books.map(book => book.author)
    console.log(auth)
    const uniqueAuthors = new Set(auth)
    console.log(uniqueAuthors)
}
// getAllAuthors()



// Task 2:
const bankAccount = {
    accountNumber: "123456789",
    ownerName: "John Doe",
    balance: 1000,
    transactions: [
      { type: "deposit", amount: 500, date: "2025-01-01" },
      { type: "withdrawal", amount: 200, date: "2025-01-10" },
    ],
  };

//   Tasks
// Implement a method deposit(amount) that adds the given amount to the balance and records the transaction.
// Implement a method withdraw(amount) that deducts the amount from the balance only if the balance is sufficient and records the transaction.
// Implement a method getAccountInfo() that returns the account details in a formatted string.
// Implement a method getTransactionHistory() that returns a list of all transactions.
// Implement a method getBalance() that returns the current balance.
// Implement a function transferFunds(sender, receiver, amount) that transfers money from one bank account to another if the sender has enough balance.




// Bonus Challenge (Logic & Problem Solving)
// 💡 Optimize the getTransactionHistory() function to allow filtering transactions by type (e.g., "deposit", "withdrawal") and return only the requested transactions.
// 💡 Modify the withdraw(amount) method to charge a transaction fee of 2% if the withdrawal amount is greater than $500.