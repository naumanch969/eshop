import { Home, Products, Product, Register, Login, Cart, Success } from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {

  const { currentUser: user } = useSelector(state => state.user)

  return (
    <div className='' >
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/register' element={user ? <Navigate replace to='/' /> : <Register />} />
        <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
      </Routes>
    </div>
  )
}

export default App