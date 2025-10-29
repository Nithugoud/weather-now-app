import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import { getCityCoordinates, getCurrentWeather } from './services/weatherService';
import './App.css';

/**
 * Main App component for Weather Now application
 * Provides weather information for outdoor enthusiast Jamie
 */
function App() {
  // State management
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle city search and fetch weather data
   * @param {string} cityName - Name of the city to search for
   */
  const handleCitySearch = async (cityName) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setCityData(null);

    try {
      // Step 1: Get city coordinates
      const cityInfo = await getCityCoordinates(cityName);
      
      // Step 2: Get weather data using coordinates
      const weather = await getCurrentWeather(cityInfo.latitude, cityInfo.longitude);
      
      // Step 3: Update state with successful data
      setCityData(cityInfo);
      setWeatherData(weather);
      
    } catch (err) {
      // Handle different types of errors with user-friendly messages
      let errorMessage = 'Unable to fetch weather data. Please try again.';
      
      if (err.message === 'City not found') {
        errorMessage = `Sorry, we couldn't find "${cityName}". Please check the spelling and try again.`;
      } else if (err.message.includes('HTTP error')) {
        errorMessage = 'Weather service is temporarily unavailable. Please try again later.';
      } else if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = 'Please check your internet connection and try again.';
      }
      
      setError(errorMessage);
      console.error('Weather fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Clear error state for retry functionality
   */
  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="app">
      <div className="app-container">
        {/* App Header */}
        <header className="app-header">
          <h1 className="app-title">
            <span className="weather-emoji">🌤️</span>
            Weather Now
          </h1>
          <p className="app-subtitle">
            Check current weather conditions for any city around the world
          </p>
        </header>

        {/* Search Section */}
        <section className="search-section">
          <SearchBar onSearch={handleCitySearch} loading={loading} />
        </section>

        {/* Content Section */}
        <main className="content-section">
          {/* Loading State */}
          {loading && (
            <div className="loading-container">
              <div className="loading-spinner-large"></div>
              <p className="loading-text">Fetching weather data...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <ErrorMessage message={error} onRetry={handleRetry} />
          )}

          {/* Weather Data Display */}
          {weatherData && cityData && !loading && !error && (
            <WeatherDisplay weatherData={weatherData} cityData={cityData} />
          )}

          {/* Welcome State */}
          {!weatherData && !loading && !error && (
            <div className="welcome-container">
              <div className="welcome-card">
                <div className="welcome-icon">🗺️</div>
                <h2 className="welcome-title">Welcome to Weather Now!</h2>
                <p className="welcome-text">
                  Enter any city name above to get instant weather information.
                  Perfect for planning your outdoor activities!
                </p>
                <div className="example-cities">
                  <p>Try searching for:</p>
                  <div className="city-examples">
                    <button 
                      onClick={() => handleCitySearch('London')}
                      className="example-city-btn"
                    >
                      London
                    </button>
                    <button 
                      onClick={() => handleCitySearch('New York')}
                      className="example-city-btn"
                    >
                      New York
                    </button>
                    <button 
                      onClick={() => handleCitySearch('Tokyo')}
                      className="example-city-btn"
                    >
                      Tokyo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* App Footer */}
        <footer className="app-footer">
          <p>
            Built for outdoor enthusiasts • Data by{' '}
            <a 
              href="https://open-meteo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open-Meteo
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;