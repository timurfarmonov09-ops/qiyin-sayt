import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Foods.css';

function Foods({ addToCart }) {
  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching foods from API...');
      const response = await axios.get('http://localhost:5000/api/foods', {
        timeout: 5000 // 5 soniya timeout
      });
      console.log('Foods received:', response.data.length);
      setFoods(response.data);
    } catch (error) {
      console.error('Foods fetch error:', error);
      setError('Ma\'lumotlarni yuklashda xatolik yuz berdi. Backend serverni tekshiring.');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(foods.map(food => food.category))];
  const filteredFoods = selectedCategory === 'all' ? foods : foods.filter(f => f.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle"></i>
        <p>{error}</p>
        <button onClick={fetchFoods} className="btn btn-primary">
          <i className="fas fa-redo"></i> Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div className="foods-page section">
      <div className="container">
        <h1 className="section-title">Bizning menyumiz</h1>
        
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'Barchasi' : cat}
            </button>
          ))}
        </div>

        {filteredFoods.length > 0 ? (
          <div className="foods-grid">
            {filteredFoods.map(food => (
              <div key={food._id} className="food-card fade-in">
                <div className="food-image">
                  <img 
                    src={food.image || 'https://via.placeholder.com/400x300?text=Ovqat'} 
                    alt={food.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Ovqat';
                    }}
                  />
                  <div className="food-overlay">
                    <button className="btn btn-primary" onClick={() => addToCart(food, 'food')}>
                      <i className="fas fa-shopping-cart"></i> Savatga qo'shish
                    </button>
                  </div>
                </div>
                <div className="food-info">
                  <h3>{food.name}</h3>
                  <p className="food-description">{food.description}</p>
                  <div className="food-footer">
                    <span className="food-price">{food.price.toLocaleString()} so'm</span>
                    <span className="food-category">{food.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-utensils"></i>
            <p>Bu kategoriyada ovqatlar yo'q</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Foods;
