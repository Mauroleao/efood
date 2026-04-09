import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: var(--white);
  padding: 24px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const HeaderContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 900;
  color: var(--coral);
  text-decoration: none;
  letter-spacing: 0.5px;

  &:hover {
    opacity: 0.8;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

const NavLink = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: var(--coral);
  }
`

const CartLink = styled(Link)`
  padding: 12px 16px;
  background-color: var(--coral);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: #d14a35;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <Logo to="/">eFood</Logo>
          <Nav>
            <NavLink to="/">Home</NavLink>
          </Nav>
        </LogoContainer>
        <CartLink to="/checkout">🛒 Carrinho</CartLink>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
