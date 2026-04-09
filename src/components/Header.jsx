import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 16px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
`

const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #e74c3c;
  text-decoration: none;

  &:hover {
    color: #c0392b;
  }
`

const Cart = styled(Link)`
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">eFood</Logo>
        <Cart to="/checkout">Carrinho</Cart>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
