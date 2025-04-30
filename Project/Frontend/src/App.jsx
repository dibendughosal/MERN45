import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import SubNavbar from "./components/SubNavbar"
import Maintainance from "./pages/Maintainance"

function App() {

  return (
    <div className="h-screen w-full overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Maintainance/>}/>
      </Routes>

    </div>
  )
}

export default App
