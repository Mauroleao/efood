import styled from 'styled-components'

const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200') center/cover;
  color: white;
  padding: 80px 16px;
  text-align: center;
  margin-bottom: 32px;
  border-radius: 8px;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: bold;
`

const Subtitle = styled.p`
  font-size: 20px;
  opacity: 0.9;
`

function Hero() {
  return (
    <HeroContainer>
      <Title>Bem-vindo ao eFood</Title>
      <Subtitle>Descubra os melhores restaurantes e pratos perto de você</Subtitle>
    </HeroContainer>
  )
}

export default Hero
