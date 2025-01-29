import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import ProductPage from './pages/ProductPage'
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className='App'>

      <NavBar />

      <main>

        <Routes>
          <Route path='/' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/products/:id' element={<ProductPage />} />
          <Route path='*' element={<div style={{ color: "red" }}>404</div>} />
        </Routes>

      </main>
    </div>
  )
}

export default App
