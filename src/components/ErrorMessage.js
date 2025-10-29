import React from 'react';
import './ErrorMessage.css';

/**
 * ErrorMessage component for displaying error states
 * @param {string} message - Error message to display
 * @param {Function} onRetry - Optional retry function
 */
const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-card">
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-message">{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="retry-button">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;