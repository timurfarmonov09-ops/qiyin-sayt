import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

function Home() {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetchFoods();
    fetchDrinks();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/foods');
      console.log('Home - Foods data:', response.data);
      setFoods(response.data.slice(0, 6)); // Faqat 6 ta
    } catch (error) {
      console.error('Xatolik:', error);
      setFoods([]); // Bo'sh array
    }
  };

  const fetchDrinks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/drinks');
      console.log('Home - Drinks data:', response.data);
      setDrinks(response.data.slice(0, 6)); // Faqat 6 ta
    } catch (error) {
      console.error('Xatolik:', error);
      setDrinks([]); // Bo'sh array
    }
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">Premium Restaurant</h1>
          <p className="hero-subtitle">Har bir taom - san'at asari</p>
          <p className="hero-description">
            Eng sifatli mahsulotlar va professional oshpazlarimiz bilan tayyorlangan noyob ta'mlar
          </p>
          <div className="hero-buttons">
            <Link to="/foods" className="btn btn-primary">
              <i className="fas fa-utensils"></i> Buyurtma berish
            </Link>
            <Link to="/about" className="btn btn-secondary">
              <i className="fas fa-info-circle"></i> Biz haqimizda
            </Link>
          </div>
        </div>
      </section>

      {/* Ovqatlar Bo'limi */}
      <section className="home-foods section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-burger"></i> Bizning Ovqatlarimiz
            </h2>
            <Link to="/foods" className="view-all-btn">
              Barchasini ko'rish <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          {foods.length > 0 ? (
            <div className="home-items-grid">
              {foods.map(food => (
                <div key={food._id} className="home-item-card fade-in">
                  <div className="home-item-image">
                    <img 
                      src={food.image || 'https://via.placeholder.com/400x300?text=Ovqat'} 
                      alt={food.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Ovqat';
                      }}
                    />
                    <div className="home-item-overlay">
                      <Link to="/foods" className="btn btn-primary btn-sm">
                        <i className="fas fa-shopping-cart"></i> Buyurtma berish
                      </Link>
                    </div>
                  </div>
                  <div className="home-item-info">
                    <h3>{food.name}</h3>
                    <p className="home-item-description">{food.description}</p>
                    <div className="home-item-footer">
                      <span className="home-item-price">
                        <i className="fas fa-tag"></i> {food.price.toLocaleString()} so'm
                      </span>
                      <span className="home-item-category">{food.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-section">
              <i className="fas fa-utensils"></i>
              <p>Hozircha ovqatlar qo'shilmagan</p>
              <p className="empty-hint">Admin panel orqali ovqatlar qo'shing</p>
            </div>
          )}
        </div>
      </section>

      {/* Ichimliklar Bo'limi */}
      <section className="home-drinks section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-mug-hot"></i> Bizning Ichimliklarimiz
            </h2>
            <Link to="/drinks" className="view-all-btn">
              Barchasini ko'rish <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          {drinks.length > 0 ? (
            <div className="home-items-grid">
              {drinks.map(drink => (
                <div key={drink._id} className="home-item-card fade-in">
                  <div className="home-item-image">
                    <img 
                      src={drink.image || 'https://via.placeholder.com/400x300?text=Ichimlik'} 
                      alt={drink.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Ichimlik';
                      }}
                    />
                    <span className="drink-badge">
                      {drink.type === 'hot' ? 
                        <><i className="fas fa-fire"></i> Issiq</> : 
                        <><i className="fas fa-snowflake"></i> Sovuq</>
                      }
                    </span>
                    <div className="home-item-overlay">
                      <Link to="/drinks" className="btn btn-primary btn-sm">
                        <i className="fas fa-shopping-cart"></i> Buyurtma berish
                      </Link>
                    </div>
                  </div>
                  <div className="home-item-info">
                    <h3>{drink.name}</h3>
                    <div className="home-item-footer">
                      <span className="home-item-price">
                        <i className="fas fa-tag"></i> {drink.price.toLocaleString()} so'm
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-section">
              <i className="fas fa-mug-hot"></i>
              <p>Hozircha ichimliklar qo'shilmagan</p>
              <p className="empty-hint">Admin panel orqali ichimliklar qo'shing</p>
            </div>
          )}
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2 className="section-title">Nima uchun biz?</h2>
          <div className="features-grid">
            <div className="feature-card scale-in">
              <div className="feature-icon"><i className="fas fa-utensils"></i></div>
              <h3>Premium sifat</h3>
              <p>Faqat eng sifatli va yangi mahsulotlardan foydalanmiz</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon"><i className="fas fa-user-chef"></i></div>
              <h3>Professional oshpazlar</h3>
              <p>Tajribali va malakali oshpazlar jamoasi</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon"><i className="fas fa-truck-fast"></i></div>
              <h3>Tez yetkazib berish</h3>
              <p>Buyurtmangizni tez va issiq holda yetkazamiz</p>
            </div>
            <div className="feature-card scale-in">
              <div className="feature-icon"><i className="fas fa-certificate"></i></div>
              <h3>100% kafolat</h3>
              <p>Sifat va ta'mga to'liq kafolat beramiz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Bugun buyurtma bering!</h2>
            <p>Ajoyib ta'mlarni his qiling va oilangiz bilan baham ko'ring</p>
            <Link to="/foods" className="btn btn-primary">
              <i className="fas fa-utensils"></i> Menyuni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Admin Panel Kirish */}
      <section className="admin-access-section section">
        <div className="container">
          <div className="admin-access-card fade-in">
            <div className="admin-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3>Restaurant Egasi</h3>
            <p>Buyurtmalarni boshqarish va menyuni tahrirlash uchun</p>
            <Link to="/admin/login" className="btn btn-admin">
              <i className="fas fa-sign-in-alt"></i> Admin Panelga Kirish
            </Link>
            <p className="admin-hint">
              <i className="fas fa-info-circle"></i> Default: admin@restaurant.uz / admin123
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
