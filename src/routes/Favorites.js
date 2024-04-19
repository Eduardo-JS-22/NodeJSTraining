import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getFavourites, postFavourites } from '../services/favouriteBooks';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`
const ResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`


function Favorites() {
  const[favourites, setFavourites] = useState([])

  async function fetchFavourites() {
    const favouritesAPI = await getFavourites()
    setFavourites(favouritesAPI)
  }

  async function insertFavourite(id) {
    await postFavourites(id)
    alert(`Livro de ${id} inserido!`)
  }

  async function deleteFavourite(id) {
    await deleteFavourite(id)
    alert(`Livro de ${id} deletado!`)
  }

  useEffect(() => {
    fetchFavourites([])
  }, [])

  return (
    <AppContainer>
      <div>
        <Title>Aqui estão seus livros favoritos:</Title>
        <ResultContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Result onClick={() => deleteFavourite(favorito.id)}>
                {favourites.map(favourite => (
                  <p>{favourite.name}</p>
                ))}
              </Result>
            )) : null
          }
        </ResultContainer>
      </div>
    </AppContainer>
  );
}

export default Favorites;