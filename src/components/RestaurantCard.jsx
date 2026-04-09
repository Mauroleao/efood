import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`

const Category = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 8px;
`

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e74c3c;
  font-weight: bold;
`

function RestaurantCard({ id, image, title, category, rating, deliveryTime }) {
  return (
    <CardContainer to={`/restaurant/${id}`}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Rating>
          <span>⭐ {rating}</span>
          <span>{deliveryTime} min</span>
        </Rating>
      </Content>
    </CardContainer>
  )
}

export default RestaurantCard
