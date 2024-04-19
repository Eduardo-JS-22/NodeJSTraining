import styled from 'styled-components';
import Logo from '../../components/Logo'
import Options from '../../components/Options';
import Icons from '../../components/Icons';
import { Link } from 'react-router-dom';

const HeaderComponent = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderComponent>
            <Link to='/'>
                <Logo/>
            </Link>
            <Options/>
            <Icons/>
        </HeaderComponent>
    )
}

export default Header