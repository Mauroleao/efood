import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const RestaurantHeader = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200') center/cover;
  color: white;
  padding: 60px 16px;
  margin-bottom: 32px;
  border-radius: 8px;
`

const RestaurantTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`

const RestaurantInfo = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 16px;

  span {
    font-size: 16px;
  }
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`

const products = [
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

function Restaurant() {
  const { id } = useParams()

  return (
    <div>
      <RestaurantHeader>
        <RestaurantTitle>Restaurante #{id}</RestaurantTitle>
        <RestaurantInfo>
          <span>⭐ 4.8</span>
          <span>🚚 30 min</span>
          <span>💰 Frete: R$ 5,00</span>
        </RestaurantInfo>
      </RestaurantHeader>

      <h2 style={{ marginBottom: '24px' }}>Cardápio</h2>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ProductsContainer>
    </div>
  )
}

export default Restaurant
