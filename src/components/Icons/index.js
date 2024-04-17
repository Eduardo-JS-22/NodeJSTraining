import styled from 'styled-components'
import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg'

const icons = [Profile, Bag]
const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
    margin-left: 40px;
`
const IconContainer = styled.li`
    display: flex;
    margin-right: 50px;
    width: 40px;
`

function Icons() {
    return (
        <IconsContainer>
            {icons.map((image) => (
                <IconContainer><img src={image}></img></IconContainer>
            ))}
        </IconsContainer>
    )
}

export default Icons