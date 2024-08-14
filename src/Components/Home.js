import React from 'react';
import '../Styles/Home.css';  // Adjust the path to the CSS file based on your folder structure

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Electronic Store</h1>
        <p>Your one-stop shop for the latest and greatest in technology.</p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Top Quality Products</h2>
          <p>
            We provide high-quality electronics from top brands. Whether you’re looking for a powerful laptop, a cutting-edge smartphone, or the latest gaming console, we have it all.
          </p>
        </div>
        <div className="feature">
          <h2>Unbeatable Prices</h2>
          <p>
            Get the best deals on your favorite electronics. Our discounts and special offers ensure you’re always getting the most value for your money.
          </p>
        </div>
        <div className="feature">
          <h2>Fast and Secure Shipping</h2>
          <p>
            We ensure fast and secure shipping for all our products. Your order will arrive safely and on time, right at your doorstep.
          </p>
        </div>
        <div className="feature">
          <h2>24/7 Customer Support</h2>
          <p>
            Our dedicated customer support team is here to help you with any questions or concerns. We’re available 24/7 to assist you.
          </p>
        </div>
      </section>
      <section className="home-call-to-action">
        <h2>Explore Our Products</h2>
        <p>
          Dive into our extensive collection of electronics and find the perfect product for you.
        </p>
        <button onClick={() => window.location.href='/products'}>Shop Now</button>
      </section>
    </div>
  );
}

export default Home;
