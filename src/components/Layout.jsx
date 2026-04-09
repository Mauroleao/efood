import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
