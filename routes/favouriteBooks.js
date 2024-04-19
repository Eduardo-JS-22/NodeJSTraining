const { Router } = require("express")
const { getFavourite, postFavourite, deleteFavourite } = require("../controllers/favouriteBooks")

const router = Router()

router.get('/', getFavourite)

router.post('/:id', postFavourite)

router.delete('/:id', deleteFavourite)

module.exports = router
