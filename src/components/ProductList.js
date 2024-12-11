// ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import Carousel from './layouts/Carousel';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import ProductWrapper from './ProductWrapper'; // Import ProductWrapper
import styles from './ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Get addToCart function from context

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Get the last 5 products
  const lastFiveProducts = products.slice(-5);
  const highlightedProducts = products.sort((a, b)=>b-a).slice(0,8);
  const lastFiveProductsLabel = "New items"
  const highlightedProductsLabel = "Highlighted items"

  return (
    <div>
      <Carousel />
      <ProductWrapper
        label={lastFiveProductsLabel}
        products={lastFiveProducts} // Pass the last 5 products
        className={styles.customClass} // Apply any custom class if needed
        fullWidth={true} // Make the wrapper full width
        addToCart={addToCart} // Pass the addToCart function to ProductWrapper
        cols1={1}    // 1 column for extra small screens (xs)
        colsSm={2}   // 2 columns for small screens (sm)
        colsMd={3}   // 3 columns for medium screens (md)
        colsLg={5}   // 5 columns for large screens (lg)
      ></ProductWrapper>
      <ProductWrapper
        label={highlightedProductsLabel}
        products={highlightedProducts} // Pass the last 5 products
        className={styles.customClass} // Apply any custom class if needed
        fullWidth={true} // Make the wrapper full width
        addToCart={addToCart} // Pass the addToCart function to ProductWrapper
        cols1={1}    // 1 column for extra small screens (xs)
        colsSm={2}   // 2 columns for small screens (sm)
        colsMd={3}   // 3 columns for medium screens (md)
        colsLg={4}   // 5 columns for large screens (lg)
      ></ProductWrapper>
    </div>
  );
}

export default ProductList;