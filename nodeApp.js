const express = require("express")
const bookRouter = require("./routes/books")
const favouriteBooksRouter = require("./routes/favouriteBooks")
const cors = require("cors")

const app = express()
const port = 8000

app.use(express.json())
app.use("/livros", bookRouter)
app.use('/favoritos', favouriteBooksRouter)
app.use(cors({origin: "*"}))

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})