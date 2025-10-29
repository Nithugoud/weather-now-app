import React, { useState } from 'react';
import './SearchBar.css';

/**
 * SearchBar component for entering city names
 * @param {Function} onSearch - Callback function when search is submitted
 * @param {boolean} loading - Whether search is in progress
 */
const SearchBar = ({ onSearch, loading }) => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName.trim()) {
      onSearch(cityName.trim());
    }
  };

  const handleInputChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={cityName}
            onChange={handleInputChange}
            placeholder="Enter city name (e.g., London, New York, Tokyo)"
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || !cityName.trim()}
          >
            {loading ? (
              <div className="loading-spinner"></div>
            ) : (
              <span>🔍</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;