import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Drinks.css';

function Drinks({ addToCart }) {
  const [drinks, setDrinks] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching drinks from API...');
      const response = await axios.get('http://localhost:5000/api/drinks', {
        timeout: 5000 // 5 soniya timeout
      });
      console.log('Drinks received:', response.data.length);
      setDrinks(response.data);
    } catch (error) {
      console.error('Drinks fetch error:', error);
      setError('Ma\'lumotlarni yuklashda xatolik yuz berdi. Backend serverni tekshiring.');
    } finally {
      setLoading(false);
    }
  };

  const filteredDrinks = selectedType === 'all' ? drinks : drinks.filter(d => d.type === selectedType);

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
        <button onClick={fetchDrinks} className="btn btn-primary">
          <i className="fas fa-redo"></i> Qayta urinish
        </button>
      </div>
    );
  }

  return (
    <div className="drinks-page section">
      <div className="container">
        <h1 className="section-title">Ichimliklar</h1>
        
        <div className="drink-type-filter">
          <button
            className={`type-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedType('all')}
          >
            Barchasi
          </button>
          <button
            className={`type-btn ${selectedType === 'hot' ? 'active' : ''}`}
            onClick={() => setSelectedType('hot')}
          >
            <i className="fas fa-fire"></i> Issiq ichimliklar
          </button>
          <button
            className={`type-btn ${selectedType === 'cold' ? 'active' : ''}`}
            onClick={() => setSelectedType('cold')}
          >
            <i className="fas fa-snowflake"></i> Sovuq ichimliklar
          </button>
        </div>

        {filteredDrinks.length > 0 ? (
          <div className="drinks-grid">
            {filteredDrinks.map(drink => (
              <div key={drink._id} className="drink-card fade-in">
                <div className="drink-image">
                  <img 
                    src={drink.image || 'https://via.placeholder.com/400x300?text=Ichimlik'} 
                    alt={drink.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Ichimlik';
                    }}
                  />
                  <span className="drink-type-badge">
                    {drink.type === 'hot' ? <><i className="fas fa-fire"></i> Issiq</> : <><i className="fas fa-snowflake"></i> Sovuq</>}
                  </span>
                </div>
                <div className="drink-info">
                  <h3>{drink.name}</h3>
                  <div className="drink-footer">
                    <span className="drink-price">{drink.price.toLocaleString()} so'm</span>
                    <button className="btn btn-primary" onClick={() => addToCart(drink, 'drink')}>
                      <i className="fas fa-plus"></i> Qo'shish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-mug-hot"></i>
            <p>Bu turda ichimliklar yo'q</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drinks;
