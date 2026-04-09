import styled from 'styled-components'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--beige);
`

const Main = styled.main`
  flex: 1;
  max-width: 1144px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
`

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

export default Layout
