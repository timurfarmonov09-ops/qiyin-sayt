import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('foods');
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      if (activeTab === 'foods') {
        const res = await axios.get('http://localhost:5000/api/foods');
        setFoods(res.data);
      } else if (activeTab === 'drinks') {
        const res = await axios.get('http://localhost:5000/api/drinks');
        setDrinks(res.data);
      } else if (activeTab === 'orders') {
        const res = await axios.get('http://localhost:5000/api/orders', config);
        setOrders(res.data);
      }
    } catch (error) {
      console.error('Xatolik:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm('O\'chirishni tasdiqlaysizmi?')) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/${type}/${id}`, config);
      fetchData();
    } catch (error) {
      alert('Xatolik yuz berdi');
    }
  };

  const handleSave = async (formData) => {
    try {
      const endpoint = activeTab === 'foods' ? 'foods' : 'drinks';
      if (editItem) {
        await axios.put(`http://localhost:5000/api/${endpoint}/${editItem._id}`, formData, config);
      } else {
        await axios.post(`http://localhost:5000/api/${endpoint}`, formData, config);
      }
      setShowModal(false);
      setEditItem(null);
      fetchData();
    } catch (error) {
      alert('Xatolik yuz berdi');
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}`, { status }, config);
      fetchData();
    } catch (error) {
      alert('Xatolik yuz berdi');
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="header-left">
          <i className="fas fa-utensils"></i>
          <h1>Admin Panel</h1>
        </div>
        <button onClick={handleLogout} className="btn btn-logout">
          <i className="fas fa-sign-out-alt"></i> Chiqish
        </button>
      </div>

      <div className="admin-tabs">
        <button className={activeTab === 'foods' ? 'active' : ''} onClick={() => setActiveTab('foods')}>
          <i className="fas fa-burger"></i> Ovqatlar
        </button>
        <button className={activeTab === 'drinks' ? 'active' : ''} onClick={() => setActiveTab('drinks')}>
          <i className="fas fa-mug-hot"></i> Ichimliklar
        </button>
        <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
          <i className="fas fa-receipt"></i> Buyurtmalar {orders.length > 0 && <span className="badge">{orders.length}</span>}
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'foods' && (
          <FoodsTab foods={foods} onDelete={handleDelete} onEdit={(item) => { setEditItem(item); setShowModal(true); }} onAdd={() => { setEditItem(null); setShowModal(true); }} />
        )}
        {activeTab === 'drinks' && (
          <DrinksTab drinks={drinks} onDelete={handleDelete} onEdit={(item) => { setEditItem(item); setShowModal(true); }} onAdd={() => { setEditItem(null); setShowModal(true); }} />
        )}
        {activeTab === 'orders' && (
          <OrdersTab orders={orders} onUpdateStatus={updateOrderStatus} />
        )}
      </div>

      {showModal && (
        <ItemModal
          item={editItem}
          type={activeTab}
          onClose={() => { setShowModal(false); setEditItem(null); }}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

function FoodsTab({ foods, onDelete, onEdit, onAdd }) {
  return (
    <div>
      <div className="tab-header">
        <h2><i className="fas fa-burger"></i> Ovqatlar ro'yxati</h2>
        <button className="btn btn-primary" onClick={onAdd}>
          <i className="fas fa-plus"></i> Yangi ovqat
        </button>
      </div>
      <div className="items-grid">
        {foods.map(food => (
          <div key={food._id} className="item-card">
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p className="item-price">{food.price.toLocaleString()} so'm</p>
            <span className="item-category"><i className="fas fa-tag"></i> {food.category}</span>
            <div className="item-actions">
              <button onClick={() => onEdit(food)} className="btn-edit">
                <i className="fas fa-edit"></i> Tahrirlash
              </button>
              <button onClick={() => onDelete(food._id, 'foods')} className="btn-delete">
                <i className="fas fa-trash"></i> O'chirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DrinksTab({ drinks, onDelete, onEdit, onAdd }) {
  return (
    <div>
      <div className="tab-header">
        <h2><i className="fas fa-mug-hot"></i> Ichimliklar ro'yxati</h2>
        <button className="btn btn-primary" onClick={onAdd}>
          <i className="fas fa-plus"></i> Yangi ichimlik
        </button>
      </div>
      <div className="items-grid">
        {drinks.map(drink => (
          <div key={drink._id} className="item-card">
            <img src={drink.image} alt={drink.name} />
            <h3>{drink.name}</h3>
            <p className="item-price">{drink.price.toLocaleString()} so'm</p>
            <span className="item-category">
              {drink.type === 'hot' ? <><i className="fas fa-fire"></i> Issiq</> : <><i className="fas fa-snowflake"></i> Sovuq</>}
            </span>
            <div className="item-actions">
              <button onClick={() => onEdit(drink)} className="btn-edit">
                <i className="fas fa-edit"></i> Tahrirlash
              </button>
              <button onClick={() => onDelete(drink._id, 'drinks')} className="btn-delete">
                <i className="fas fa-trash"></i> O'chirish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersTab({ orders, onUpdateStatus }) {
  const statusColors = {
    pending: '#f39c12',
    confirmed: '#3498db',
    preparing: '#9b59b6',
    delivered: '#27ae60',
    cancelled: '#e74c3c'
  };

  const statusIcons = {
    pending: 'fa-clock',
    confirmed: 'fa-check',
    preparing: 'fa-fire-burner',
    delivered: 'fa-truck',
    cancelled: 'fa-times-circle'
  };

  return (
    <div>
      <div className="tab-header">
        <h2><i className="fas fa-receipt"></i> Buyurtmalar</h2>
        <div className="orders-stats">
          <span className="stat-badge">
            <i className="fas fa-shopping-bag"></i> Jami: {orders.length}
          </span>
          <span className="stat-badge pending">
            <i className="fas fa-clock"></i> Kutilmoqda: {orders.filter(o => o.status === 'pending').length}
          </span>
        </div>
      </div>
      <div className="orders-list">
        {orders.map(order => (
          <div key={order._id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3><i className="fas fa-user"></i> {order.customerName}</h3>
                <span className="order-date">
                  <i className="fas fa-calendar"></i> {new Date(order.createdAt).toLocaleDateString('uz-UZ')}
                </span>
              </div>
              <span className="order-status" style={{ background: statusColors[order.status] }}>
                <i className={`fas ${statusIcons[order.status]}`}></i> {order.status}
              </span>
            </div>
            <p><i className="fas fa-phone"></i> {order.customerPhone}</p>
            {order.address && <p><i className="fas fa-location-dot"></i> {order.address}</p>}
            {order.notes && <p><i className="fas fa-note-sticky"></i> {order.notes}</p>}
            <div className="order-items">
              <h4><i className="fas fa-list"></i> Buyurtma tarkibi:</h4>
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item-row">
                  <span>{item.name} x{item.quantity}</span>
                  <span>{(item.price * item.quantity).toLocaleString()} so'm</span>
                </div>
              ))}
            </div>
            <p className="order-total">
              <i className="fas fa-money-bill-wave"></i> Jami: {order.totalAmount.toLocaleString()} so'm
            </p>
            <div className="order-status-select">
              <label><i className="fas fa-tasks"></i> Status:</label>
              <select value={order.status} onChange={(e) => onUpdateStatus(order._id, e.target.value)}>
                <option value="pending">Kutilmoqda</option>
                <option value="confirmed">Tasdiqlandi</option>
                <option value="preparing">Tayyorlanmoqda</option>
                <option value="delivered">Yetkazildi</option>
                <option value="cancelled">Bekor qilindi</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ItemModal({ item, type, onClose, onSave }) {
  const [formData, setFormData] = useState(item || {
    name: '',
    description: '',
    price: '',
    category: '',
    type: 'hot',
    image: 'https://via.placeholder.com/300x200'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{item ? 'Tahrirlash' : 'Yangi qo\'shish'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nomi"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          {type === 'foods' && (
            <>
              <textarea
                placeholder="Tavsif"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Kategoriya"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
            </>
          )}
          {type === 'drinks' && (
            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
              <option value="hot">Issiq</option>
              <option value="cold">Sovuq</option>
            </select>
          )}
          <input
            type="number"
            placeholder="Narxi"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Rasm URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Saqlash</button>
            <button type="button" onClick={onClose} className="btn btn-secondary">Bekor qilish</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
