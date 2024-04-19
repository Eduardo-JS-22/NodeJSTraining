import axios from "axios";

const booksAPI = axios.create({baseURL: "http://localhost:8000/livros"})

async function getBooks() {
    try {
        const response = await booksAPI.get('/')
        return response.data
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

export {
    getBooks
}