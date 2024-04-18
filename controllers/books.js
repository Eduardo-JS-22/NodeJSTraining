const fs = require("fs")
const { getAllBooks, getBookById, postAddBook, patchUpdateBook, deleteBookById } = require("../services/books")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        postAddBook(newBook)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function updateBook(req, res) {
    try {
        const id = req.params.id
        const modify = req.body
        patchUpdateBook(modify, id)
        res.send("Item modificado com sucesso!")
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id
        deleteBookById(id)
        res.send("Item deletado com sucesso!")
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    updateBook,
    deleteBook
}