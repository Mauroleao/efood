import styled from 'styled-components'

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 48px;
`

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
  color: #333;
`

const EmptyCart = styled.div`
  text-align: center;
  padding: 48px 16px;
  color: #888;

  p {
    font-size: 18px;
    margin-bottom: 16px;
  }
`

function Checkout() {
  return (
    <CheckoutContainer>
      <Title>Carrinho</Title>
      <EmptyCart>
        <p>🛒</p>
        <p>Seu carrinho está vazio</p>
        <p style={{ fontSize: '14px' }}>Adicione alguns itens antes de fazer o checkout</p>
      </EmptyCart>
    </CheckoutContainer>
  )
}

export default Checkout
