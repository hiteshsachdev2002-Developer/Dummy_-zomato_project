import React from 'react';

function MenuPage() {
  return (
    <div className="menu-card">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/025/770/499/small_2x/hot-and-spicy-chicken-biryani-with-roasted-pieces-and-lemon-illustration-on-isolated-white-background-vector.jpg" alt="img" className="menu-image" />
      <div className="menu-content">
        <div className="menu-header">
          <h4>CHICKEN</h4>
          <span className="menu-price"> ₹ 100.50</span>
        </div>
        <p className="menu-description">Chicken is a major source of meat and eggs.</p>
        <span className="heart">❤️</span>
      </div>
    </div>
  );
}

export default MenuPage;