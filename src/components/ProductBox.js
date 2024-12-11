// ProductBox.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.css'; // Import the CSS Module
import { Link } from "react-router-dom";

const ProductBox = ({ product, addToCart }) => {
  // Check if the title is short (one line)
  const isSingleLine = product.title.split(' ').length <= 5; // Adjust this logic based on title length

  return (
    <div className={`col ${isSingleLine ? styles.singleLine : ''}`}>
      <div className={`card shadow-sm ${styles.card}`}>
        <img
          src={product.image}
          alt={product.title}
          className="bd-placeholder-img card-img-top"
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className={`card-body ${styles.cardBody}`}>
          <p className={`${styles.productTitle} card-text`}>{product.title}</p>
          <small className="text-black fw-bold text-center w-100 d-block">{product.price}$</small>
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/product/${product.id}`}><button type="button" className="btn btn-sm btn-outline-secondary">Pogledaj</button></Link>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-sm btn-success" // Green background and hover effect
                onClick={() => addToCart(product)}
              >
                <i className="bi-cart-fill me-1"></i>
                Dodaj u korpu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductBox;
