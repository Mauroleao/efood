import styled from 'styled-components'
import { useState } from 'react'

const CardContainer = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  font-size: 15px;
  margin-bottom: 6px;
  color: var(--dark);
  font-weight: 700;
`

const Description = styled.p`
  color: var(--text-light);
  font-size: 12px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`

const Price = styled.p`
  color: var(--coral);
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
`

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: var(--coral);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d14a35;
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
          {addedToCart ? '✓ Adicionado' : 'Adicionar'}
        </Button>
      </Content>
    </CardContainer>
  )
}

export default ProductCard
