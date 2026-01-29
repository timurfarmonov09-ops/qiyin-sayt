import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import About from './pages/About';
import Cart from './pages/Cart';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, type) => {
    const existingItem = cart.find(i => i.id === item._id && i.type === type);
    if (existingItem) {
      setCart(cart.map(i => i.id === item._id && i.type === type ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { id: item._id, name: item.name, price: item.price, quantity: 1, type, image: item.image }]);
    }
  };

  const removeFromCart = (id, type) => {
    setCart(cart.filter(item => !(item.id === id && item.type === type)));
  };

  const updateQuantity = (id, type, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, type);
    } else {
      setCart(cart.map(item => item.id === id && item.type === type ? { ...item, quantity } : item));
    }
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<Foods addToCart={addToCart} />} />
          <Route path="/drinks" element={<Drinks addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
