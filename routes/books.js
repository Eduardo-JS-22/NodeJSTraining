const {Router} = require("express")
const router = Router()
const {getBooks, getBook, postBook, updateBook, deleteBook} = require("../controllers/books")

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/:id', updateBook)

router.delete('/:id', deleteBook)

module.exports = router