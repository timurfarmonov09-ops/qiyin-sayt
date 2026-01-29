import React, { useState } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart({ cart, updateQuantity, removeFromCart, clearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    try {
      const orderData = {
        customerName,
        customerPhone,
        address,
        notes,
        items: cart.map(item => ({
          itemId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          type: item.type
        })),
        totalAmount
      };

      await axios.post('http://localhost:5000/api/orders', orderData);
      setSuccess(true);
      clearCart();
      setTimeout(() => {
        setSuccess(false);
        setCustomerName('');
        setCustomerPhone('');
        setAddress('');
        setNotes('');
      }, 3000);
    } catch (error) {
      alert('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="success-message section">
        <div className="container">
          <div className="success-card fade-in">
            <div className="success-icon"><i className="fas fa-check-circle"></i></div>
            <h2>Buyurtma qabul qilindi!</h2>
            <p>Tez orada siz bilan bog'lanamiz. Rahmat!</p>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="empty-cart section">
        <div className="container">
          <div className="empty-cart-content">
            <div className="empty-icon"><i className="fas fa-shopping-cart"></i></div>
            <h2>Savatingiz bo'sh</h2>
            <p>Hozircha hech narsa qo'shilmagan</p>
            <a href="/foods" className="btn btn-primary">
              <i className="fas fa-utensils"></i> Ovqatlarni ko'rish
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page section">
      <div className="container">
        <h1 className="section-title">Savat</h1>
        
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.type}`} className="cart-item fade-in">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price.toLocaleString()} so'm</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  {(item.price * item.quantity).toLocaleString()} so'm
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.id, item.type)}>
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Buyurtma ma'lumotlari</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ismingiz *</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                  placeholder="Ismingizni kiriting"
                />
              </div>
              <div className="form-group">
                <label>Telefon raqam *</label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  required
                  placeholder="+998 90 123 45 67"
                />
              </div>
              <div className="form-group">
                <label>Manzil</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Yetkazib berish manzili"
                />
              </div>
              <div className="form-group">
                <label>Izoh</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Qo'shimcha izohlar"
                  rows="3"
                />
              </div>
              
              <div className="order-total">
                <span>Jami:</span>
                <span className="total-amount">{totalAmount.toLocaleString()} so'm</span>
              </div>
              
              <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                {loading ? (
                  <><i className="fas fa-spinner fa-spin"></i> Yuborilmoqda...</>
                ) : (
                  <><i className="fas fa-check-circle"></i> Buyurtma berish</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
