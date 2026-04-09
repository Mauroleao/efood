import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Checkout from '../pages/Checkout'

function AppRoutes() {
  return (
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRoutes
