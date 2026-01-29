import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      localStorage.setItem('adminToken', response.data.token);
      navigate('/admin/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Login xatosi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container fade-in">
        <div className="login-header">
          <div className="login-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <h1>Admin Panel</h1>
          <p>Tizimga kirish</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i> {error}
            </div>
          )}
          
          <div className="form-group">
            <label><i className="fas fa-envelope"></i> Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@restaurant.uz"
              required
            />
          </div>
          
          <div className="form-group">
            <label><i className="fas fa-lock"></i> Parol</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
            {loading ? (
              <><i className="fas fa-spinner fa-spin"></i> Kirish...</>
            ) : (
              <><i className="fas fa-sign-in-alt"></i> Kirish</>
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <p><i className="fas fa-info-circle"></i> Default: admin@restaurant.uz / admin123</p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
