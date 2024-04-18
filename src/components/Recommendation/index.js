import styled from "styled-components";
import { TitleContainer } from "../Title";

const CardContainer = styled.div`
    align-itens: center;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`
const ButtonContainer = styled.button`
    background-color: #eb9b00;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }
`
const DescriptionContainer = styled.p`
    max-width: 300px;
`
const SubtitleContainer = styled.h4`
    color: #002f52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`
const ImageContainer = styled.img`
    width: 150px;
`


function Recommendation({Title, Subtitle, Description, Image}) {
    return (
            <CardContainer>
                <div>
                    <TitleContainer fontSize="16px" color="#eb9b00" alignText="left">{Title}</TitleContainer>
                    <SubtitleContainer>{Subtitle}</SubtitleContainer>
                    <DescriptionContainer>{Description}</DescriptionContainer>
                </div>
                <div>
                    <ImageContainer src={Image}/>
                    <ButtonContainer>Saiba Mais</ButtonContainer>
                </div>
            </CardContainer>
    )
}

export default Recommendation