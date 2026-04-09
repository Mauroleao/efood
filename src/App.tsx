<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import Rout from './Routes'
import { Styles } from './styles'

function App() {
  return (
    <BrowserRouter>
      <Styles />
      <Rout />
    </BrowserRouter>
  )
=======
import React from 'react'
import AppRoutes from './routes/Routes'

const App: React.FC = () => {
  return <AppRoutes />
>>>>>>> 75e9fa66d63c4db81b4c4a175c0c6ff3aa11de88
}

export default App
