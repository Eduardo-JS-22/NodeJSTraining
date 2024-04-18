const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const book = books.filter(book => book.id === parseInt(id))[0] // [0] Retorna apenas o elemento localizado na posição 0
    return book
}

function postAddBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const newBookArray = [...books, newBook]
    fs.writeFileSync("books.json", JSON.stringify(newBookArray))
}

function patchUpdateBook(modify, id) {
    let books = JSON.parse(fs.readFileSync("books.json"))
    const modifyIndex = books.findIndex(book => book.id === parseInt(id))
    const modifyContent = {...books[modifyIndex], ...modify} // Procura nos livros o livro com id específico, Tras as modificações feitas pelo usuários e Altera o valor do name.
    books[modifyIndex] = modifyContent
    fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBookById(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const index = books.findIndex(book => book.id === parseInt(id))
    books.splice(index, 1)
    fs.writeFileSync("books.json", JSON.stringify(books))

    /*
    const books = JSON.parse(fs.readFileSync("books.json"))
    const book = books.filter(book => book.id !== parseInt(id)) //  Cria uma nova lista com os livros diferente de id.
    fs.writeFileSync("books.json", JSON.stringify(book))
    */
}

module.exports = {
    getAllBooks,
    getBookById,
    postAddBook,
    patchUpdateBook,
    deleteBookById
}