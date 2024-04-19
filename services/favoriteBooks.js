const fs = require("fs")

function getFavouriteBooks() {
    return JSON.parse( fs.readFileSync("favoritos.json") )
}

function deleteFavouriteBooks(id) {
    const books = JSON.parse( fs.readFileSync("favoritos.json") )
    
    const booksFiltrados = books.filter( book => book.id !== id)
    fs.writeFileSync("favoritos.json", JSON.stringify(booksFiltrados))
}

function postFavouriteBooks(id) {
    const books = JSON.parse( fs.readFileSync("books.json") )
    const favoritos = JSON.parse( fs.readFileSync("favoritos.json") )

    const newBook = books.find( book => book.id === id)
    const newBookList = [...favoritos, newBook]
    fs.writeFileSync("favoritos.json", JSON.stringify(newBookList))
}

module.exports = {
    getFavouriteBooks,
    deleteFavouriteBooks,
    postFavouriteBooks
}