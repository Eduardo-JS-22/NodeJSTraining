import axios from "axios";

const favouritesAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavourites() {
    try {
        const response = await favouritesAPI.get('/')
        return response.data
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

async function postFavourites(id) {
    try {
        await favouritesAPI.post(`/${id}`)
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

async function deleteFavourites(id) {
    try {
        await favouritesAPI.delete(`/${id}`)
    } catch (error) {
        console.log(`Erro: ${error.message}`)
    }
}

export {
    getFavourites,
    postFavourites,
    deleteFavourites
}