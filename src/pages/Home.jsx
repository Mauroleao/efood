import styled from 'styled-components'
import Hero from '../components/Hero'
import RestaurantCard from '../components/RestaurantCard'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`

const restaurants = [
  {
    id: 1,
    title: 'Pizzaria Bella Italia',
    category: 'Italiana',
    rating: 4.8,
    deliveryTime: 30,
    image: 'https://images.unsplash.com/photo-1579751626658-0e754007be93?w=600'
  },
  {
    id: 2,
    title: 'Sushi Master',
    category: 'Japonesa',
    rating: 4.9,
    deliveryTime: 35,
    image: 'https://images.unsplash.com/photo-1564489551201-4f3f499dc1a6?w=600'
  },
  {
    id: 3,
    title: 'Burger Premium',
    category: 'Americana',
    rating: 4.6,
    deliveryTime: 25,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600'
  },
  {
    id: 4,
    title: 'Churrascaria Grill',
    category: 'Brasileira',
    rating: 4.7,
    deliveryTime: 40,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561370?w=600'
  },
  {
    id: 5,
    title: 'Thai Express',
    category: 'Tailandesa',
    rating: 4.5,
    deliveryTime: 35,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600'
  },
  {
    id: 6,
    title: 'Taco Fiesta',
    category: 'Mexicana',
    rating: 4.4,
    deliveryTime: 28,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600'
  }
]

function Home() {
  return (
    <div>
      <Hero />
      <Container>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
          />
        ))}
      </Container>
    </div>
  )
}

export default Home
