
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import CartItems from './pages/CartItems';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={<AllProducts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      {/* <AllProducts/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
