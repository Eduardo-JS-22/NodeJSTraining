import styled from "styled-components"

const optionText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const OptionContainer = styled.li`
    display: flex;
    min-width: 150px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`
const OptionsContainer = styled.ul`
    display: flex;
    align-items: center;
`


function Options() {
    return (
        <OptionsContainer>
            {optionText.map((text) => (
                <OptionContainer><p>{text}</p></OptionContainer>
            ))}
        </OptionsContainer>
    )
}

export default Options