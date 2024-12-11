import React from 'react';
import PropTypes from 'prop-types';
import ProductBox from './ProductBox'; // Assuming you already have ProductBox component

const ProductWrapper = ({ label, products, addToCart, className, fullWidth, cols1, colsSm, colsMd, colsLg }) => {
  // Dynamically generate the column class names based on the props passed
  const getColumnClass = () => {
    return `
      row-cols-${cols1} row-cols-sm-${colsSm} row-cols-md-${colsMd} row-cols-lg-${colsLg}
    `.trim();
  };

  return (
    <div className={`album py-5 bg-light ${className} ${fullWidth ? 'w-100' : ''}`}>
      <div className="container">
        <h2>{label}</h2>
        <div className={`row ${getColumnClass()} g-3`}>
          {products.map((product) => (
            <ProductBox key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

ProductWrapper.propTypes = {
  products: PropTypes.array.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  cols1: PropTypes.number,   // Columns for xs breakpoint (smallest screens)
  colsSm: PropTypes.number,  // Columns for sm breakpoint (small screens)
  colsMd: PropTypes.number,  // Columns for md breakpoint (medium screens)
  colsLg: PropTypes.number,  // Columns for lg breakpoint (large screens)
};

ProductWrapper.defaultProps = {
  className: '',
  fullWidth: false,
  cols1: 1,      // Default to 1 column for xs screens
  colsSm: 2,     // Default to 2 columns for sm screens
  colsMd: 3,     // Default to 3 columns for md screens
  colsLg: 5,     // Default to 5 columns for lg screens
};

export default ProductWrapper;
