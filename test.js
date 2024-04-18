const fs = require("fs")

const dataJson = JSON.parse(fs.readFileSync("books.json"))
const newData = {id: 3, name: "Livro 3"}

fs.writeFileSync("books.json", JSON.stringify([...dataJson, newData]))

console.log(JSON.parse(fs.readFileSync("books.json")))