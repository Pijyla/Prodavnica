import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search-results?query=${query}`);  // Use navigate to redirect
    }
  };

  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0" onSubmit={handleSearchSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Pretraga..."
        aria-label="Pretraga"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
