import React from 'react'
import styled from 'styled-components'

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--white);
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 48px;
`

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
  color: var(--dark);
  font-weight: 700;
`

const EmptyCart = styled.div`
  text-align: center;
  padding: 48px 16px;
  color: var(--text-light);

  p {
    font-size: 16px;
    margin-bottom: 16px;
  }
`

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`

const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <Title>Carrinho</Title>
      <EmptyCart>
        <Icon>🛒</Icon>
        <p>Seu carrinho está vazio</p>
        <p style={{ fontSize: '14px' }}>Adicione alguns itens antes de fazer o checkout</p>
      </EmptyCart>
    </CheckoutContainer>
  )
}

export default Checkout
