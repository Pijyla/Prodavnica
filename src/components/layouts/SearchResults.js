import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store error (optional)
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query');  // Get the query parameter from URL

  useEffect(() => {
    if (query) {
      // Fetch products from API when query is available
      const fetchProducts = async () => {
        setLoading(true);  // Set loading state to true while fetching data
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          // Filter products based on the search query
          const filteredProducts = response.data.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
          );
          setProducts(filteredProducts);
        } catch (error) {
          console.error('Error fetching products:', error);
          setError('Failed to fetch products.');  // Handle error if API call fails
        } finally {
          setLoading(false);  // Set loading to false once data is fetched
        }
      };

      fetchProducts();
    }
  }, [query]);  // Re-run the effect when the query parameter changes

  return (
    <div className="container">
      <h2>Search Results for: "{query}"</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}  {/* Show error message if exists */}

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card">
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found for "{query}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;