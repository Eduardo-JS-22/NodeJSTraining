import styled from 'styled-components';
import Logo from '../../components/Logo'
import Options from '../../components/Options';
import Icons from '../../components/Icons';

const HeaderComponent = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderComponent>
            <Logo></Logo>
            <Options></Options>
            <Icons></Icons>
        </HeaderComponent>
    )
}

export default Header