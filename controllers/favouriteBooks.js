const { getFavouriteBooks, postFavouriteBooks, deleteFavouriteBooks } = require("../services/favoriteBooks")

function getFavourite(req, res) {
    try {
        const book = getFavouriteBooks()
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavourite(req, res) {
    try {
        const id = req.params.id
        postFavouriteBooks(id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavourite(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteFavouriteBooks(id)
            res.send("Favorito deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID inválido")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getFavourite,
    postFavourite,
    deleteFavourite
}