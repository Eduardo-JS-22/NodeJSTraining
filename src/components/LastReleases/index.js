import styled from "styled-components";
import { books } from './lastReleasesData'
import { TitleContainer } from "../Title";
import Recommendation from "../Recommendation";
import BookImage from "../../images/livro2.png"

const SectionContainer = styled.section`
    background-color: #ebecee;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <SectionContainer>
            <TitleContainer color="#eb9b00" fontSize="36px">ÚLTIMOS LANÇAMENTOS</TitleContainer>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} />
                ))}
            </NewBooksContainer>
            <Recommendation
                Title="Talvez você se enteressa por..."
                Subtitle="Angular 11"
                Description="Construindo uma aplicação com a plataforma Google."
                Image={BookImage}
            />
        </SectionContainer>
    )
}

export default LastReleases