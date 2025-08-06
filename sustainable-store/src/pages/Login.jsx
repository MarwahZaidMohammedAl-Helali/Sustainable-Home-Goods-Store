import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <h1>🌱 Sustainable Home Goods Store</h1>
      <p>Welcome to your eco-friendly shopping destination!</p>
      <div className="card">
        <h2>Coming Soon:</h2>
        <ul>
          <li>🛒 Product Categories</li>
          <li>🌍 Carbon Footprint Calculator</li>
          <li>📝 Eco-Living Blog</li>
          <li>♻️ Sustainability Metrics</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Test Navigation:</h3>
        <nav>
          <a href="/category/kitchen" className="btn btn-primary" style={{marginRight: '1rem'}}>Kitchen Products</a>
          <a href="/cart" className="btn btn-secondary" style={{marginRight: '1rem'}}>Cart</a>
          <a href="/blog" className="btn btn-secondary">Blog</a>
        </nav>
      </div>
    </div>
  );
};

export default Home;