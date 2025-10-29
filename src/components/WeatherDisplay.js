import React from 'react';
import { getWeatherDescription } from '../services/weatherService';
import './WeatherDisplay.css';

/**
 * WeatherDisplay component showing current weather conditions
 * @param {Object} weatherData - Weather data from Open-Meteo API
 * @param {Object} cityData - City information including name and country
 */
const WeatherDisplay = ({ weatherData, cityData }) => {
  if (!weatherData || !cityData) {
    return null;
  }

  const { current, current_units } = weatherData;
  const weatherInfo = getWeatherDescription(current.weather_code, current.is_day);
  
  // Format date and time
  const now = new Date();
  const dateOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true
  };

  const formatWindDirection = (degrees) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
  };

  return (
    <div className="weather-display">
      <div className="weather-card">
        {/* Header with city info */}
        <div className="weather-header">
          <h1 className="city-name">
            {cityData.name}
            {cityData.admin1 && `, ${cityData.admin1}`}
          </h1>
          <p className="country-name">{cityData.country}</p>
          <p className="date-time">
            {now.toLocaleDateString('en-US', dateOptions)}
            <br />
            {now.toLocaleTimeString('en-US', timeOptions)}
          </p>
        </div>

        {/* Main weather info */}
        <div className="weather-main">
          <div className="temperature-section">
            <span className="weather-icon">{weatherInfo.icon}</span>
            <div className="temperature">
              <span className="temp-value">{Math.round(current.temperature_2m)}</span>
              <span className="temp-unit">{current_units.temperature_2m}</span>
            </div>
          </div>
          <div className="weather-description">
            <p className="condition">{weatherInfo.description}</p>
            <p className="feels-like">
              Feels like {Math.round(current.apparent_temperature)}{current_units.apparent_temperature}
            </p>
          </div>
        </div>

        {/* Weather details grid */}
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-icon">💧</span>
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{current.relative_humidity_2m}{current_units.relative_humidity_2m}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">💨</span>
            <span className="detail-label">Wind</span>
            <span className="detail-value">
              {Math.round(current.wind_speed_10m)} {current_units.wind_speed_10m} {formatWindDirection(current.wind_direction_10m)}
            </span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">🌡️</span>
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{Math.round(current.pressure_msl)} {current_units.pressure_msl}</span>
          </div>
          
          <div className="detail-item">
            <span className="detail-icon">☁️</span>
            <span className="detail-label">Cloud Cover</span>
            <span className="detail-value">{current.cloud_cover}{current_units.cloud_cover}</span>
          </div>
          
          {current.precipitation > 0 && (
            <div className="detail-item">
              <span className="detail-icon">🌧️</span>
              <span className="detail-label">Precipitation</span>
              <span className="detail-value">{current.precipitation} {current_units.precipitation}</span>
            </div>
          )}
          
          {current.wind_gusts_10m > 0 && (
            <div className="detail-item">
              <span className="detail-icon">💨</span>
              <span className="detail-label">Wind Gusts</span>
              <span className="detail-value">{Math.round(current.wind_gusts_10m)} {current_units.wind_gusts_10m}</span>
            </div>
          )}
        </div>

        {/* Additional info */}
        <div className="weather-footer">
          <p className="data-source">
            Weather data provided by <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;