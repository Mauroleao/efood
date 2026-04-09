import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  background-color: var(--coral-light);
  color: var(--coral);
  padding: 60px 16px;
  text-align: center;
  margin-bottom: 32px;
  border-radius: 0;
`

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
  font-weight: 900;
  letter-spacing: -0.5px;
`

const Subtitle = styled.p`
  font-size: 18px;
  color: var(--coral);
  font-weight: 500;
`

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Title>Viva experiências gastronômicas</Title>
      <Subtitle>no conforto da sua casa</Subtitle>
    </HeroContainer>
  )
}

export default Hero
