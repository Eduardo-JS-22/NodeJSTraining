import styled from 'styled-components'
import InputContainer from '../Input'
import { useState } from 'react'
import { books } from './searchData'

const SearchContainer = styled.section`
    background-color: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const TitleContainer = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitleContainer = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [inputBook, setInputBook] = useState([])

    console.log(inputBook)

    return (
        <SearchContainer>
            <TitleContainer>Já sabe por onde começar?</TitleContainer>
            <SubTitleContainer>Encontre seu livre na nossa estante</SubTitleContainer>
            <InputContainer
                placeholder="Escreva sua próxima leitura"
                onBlur={event => {
                    const inputText = event.target.value
                    const resultSearch = books.filter(book => book.name.includes(inputText));
                    setInputBook(resultSearch);
                }}
            />
            {inputBook.map(book => (
                <ResultContainer>
                    <img src={book.src}/>
                    <p>{book.name}</p>
                </ResultContainer>
            ))}
        </SearchContainer>
    )
}

export default Search