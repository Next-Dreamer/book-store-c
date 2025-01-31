import { styled } from 'styled-components';
function Header() {
    return (
        <HeaderStyled>
            <h1>book store</h1>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.color.background};

    h1 {
        color: ${({ theme }) => theme.color.primary};
    }
`;

export default Header;
