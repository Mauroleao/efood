import styled from 'styled-components'
import { useState } from 'react'

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`

const Description = styled.p`
  color: #888;
  font-size: 12px;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Price = styled.p`
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 12px;
`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`

function ProductCard({ id, image, title, description, price }) {
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>R$ {price.toFixed(2)}</Price>
        <Button onClick={handleAddToCart}>
          {addedToCart ? '✓ Adicionado' : 'Adicionar ao Carrinho'}
        </Button>
      </Content>
    </CardContainer>
  )
}

export default ProductCard
