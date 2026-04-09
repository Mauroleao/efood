import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled(Link)`
  display: block;
  text-decoration: none;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }
`

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

const Content = styled.div`
  padding: 16px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 8px;
`

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 4px;
  color: var(--dark);
  font-weight: 700;
  flex: 1;
`

const Label = styled.span`
  display: inline-block;
  background-color: var(--coral);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  margin-left: 8px;
  white-space: nowrap;
`

const Category = styled.p`
  color: var(--text-light);
  font-size: 12px;
  margin-bottom: 12px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--dark);
  font-weight: 600;
`

const Rating = styled.span`
  color: var(--coral);
`

function RestaurantCard({ id, image, title, category, rating, deliveryTime }) {
  return (
    <CardContainer to={`/restaurant/${id}`}>
      <Image src={image} alt={title} />
      <Content>
        <Header>
          <Title>{title}</Title>
          <Label>Destaque</Label>
        </Header>
        <Category>{category}</Category>
        <Info>
          <Rating>⭐ {rating}</Rating>
          <span>{deliveryTime} min</span>
        </Info>
      </Content>
    </CardContainer>
  )
}

export default RestaurantCard
