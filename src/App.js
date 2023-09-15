
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home/Home';
import Footer from './components/Footer/Footer';
import Product from './modules/Product/Product';
import Cart from './modules/Cart/Cart';
import Offers from './modules/Offers/Offers';
import Category from './modules/category/Category';
function App() {
  return (
  <div>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:id" element={<Product/>}/>
    <Route path="/products/:id/cart" element={<Cart/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/offers' element={<Offers/>}/>
    <Route path='/category' element={<Category/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
