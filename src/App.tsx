import Layout from "./components/Layout/Layout"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Signup from "./pages/Signup/Signup"
import About from "./pages/About/About"
import { Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart/Cart"
import Wishlist from "./pages/Wishlist/Wishlist"
import Notfound from "./pages/Notfound/Notfound"
import Login from "./pages/Login/Login"
import ProductDetails from "./pages/Products/ProductDetails/ProductDetails"
import Account from "./pages/Account/Account"
import Products from "./pages/Products/Products"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="products" element={<Products />} />
        <Route path="products/productDetails/:id" element={<ProductDetails />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  )
}

