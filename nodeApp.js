const express = require("express")
const bookRouter = require("./routes/books")
const app = express()
const port = 8000

app.use(express.json())
app.use("/livros", bookRouter)

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})