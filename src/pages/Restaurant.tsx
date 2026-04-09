import React from 'react'
import styled from 'styled-components'
import ProductCard from '../components/ProductCard'

const Banner = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin-bottom: 32px;
  border-radius: 8px;
`

const RestaurantHeader = styled.div`
  margin-bottom: 32px;
`

const RestaurantTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 12px;
  color: var(--dark);
  font-weight: 700;
`

const RestaurantDescription = styled.p`
  color: var(--text-light);
  font-size: 14px;
  margin-bottom: 16px;
`

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 24px;
  color: var(--dark);
  font-weight: 700;
  text-transform: capitalize;
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

interface Product {
  id: number
  title: string
  description: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Pizza Margherita',
    description: 'Tomate fresco, mozzarela e manjericão',
    price: 35.90,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400'
  },
  {
    id: 2,
    title: 'Pizza Pepperoni',
    description: 'Salame e queijo derretido',
    price: 38.90,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07f4af?w=400'
  },
  {
    id: 3,
    title: 'Pizza 4 Queijos',
    description: 'Mozzarela, gorgonzola, parmesão e provolone',
    price: 42.90,
    image: 'https://images.unsplash.com/photo-1606787620953-56f4e6a8c0e0?w=400'
  },
  {
    id: 4,
    title: 'Refrigerante',
    description: 'Coca-Cola 2L',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1554866585-a1d6b8b50a25?w=400'
  },
  {
    id: 5,
    title: 'Cerveja',
    description: 'Brahma 600ml',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1590080876017-54a34e5f8b4b?w=400'
  },
  {
    id: 6,
    title: 'Sorvete',
    description: 'Sorvete de chocolate',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400'
  }
]

const Restaurant: React.FC = () => {
  return (
    <div>
      <Banner
        src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200"
        alt="Restaurante"
      />
      <RestaurantHeader>
        <RestaurantTitle>La Dolca Vita Trattoria</RestaurantTitle>
        <RestaurantDescription>
          ⭐ 4.8 (489 avaliações) • 🚚 30 min • R$ 5,00 de frete
        </RestaurantDescription>
      </RestaurantHeader>

      <SectionTitle>Cardápio</SectionTitle>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Restaurant
