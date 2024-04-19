const fs = require("fs")
const { getAllBooks, getBookById, postAddBook, patchUpdateBook, deleteBookById } = require("../services/books")

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        if (books != null) {
            res.send(books)
        } else {
            res.status(404)
            res.send("Livros não Encontrados")
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const book = getBookById(id)
            if (book != null) {
                res.send(book)
            } else {
                res.status(404)
                res.send("Livro não Encontrado")
            }
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if (req.body.name) {
            postAddBook(newBook)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("O campo name é obrigatório!")
        }
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
        if (id && Number(id)) {
            if (req.body.name) {
                patchUpdateBook(modify, id)
                res.send("Item modificado com sucesso!")
            } else {
                res.status(422)
                res.send("O campo name é obrigatório!")
            }            
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deleteBookById(id)
            res.send("Item deletado com sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
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