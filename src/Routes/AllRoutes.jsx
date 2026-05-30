import { Routes, Route } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'
import Single from '../Pages/Single'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import ProtectedRoute from '../Components/ProtectedRoute'
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route
        path="/single/:id"
        element={
          <ProtectedRoute>
            <Single />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default AllRoutes
