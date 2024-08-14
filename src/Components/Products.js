import React from 'react';
import products from '../productData'; // Import the product data from the separate file
import '../Styles/Products.css'; // Import the corresponding CSS file

function Products() {
  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Products</h1>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">
              <span className="discount-price">{product.discountPrice}</span>
              <span className="original-price">{product.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
