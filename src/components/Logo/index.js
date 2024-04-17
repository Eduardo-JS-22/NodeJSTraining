import styled from 'styled-components'
import logo from '../../images/logo.svg'

const LogoContainer = styled.div`
    display: flex;
    font-size: 40px;
`

const LogoImageContainer = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImageContainer src={logo} alt='logo'/>
            <p><strong>BR</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo