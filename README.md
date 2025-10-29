# Weather Now 🌤️

![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-Modern-green)  
![API](https://img.shields.io/badge/API-Open--Meteo-orange)
![Responsive](https://img.shields.io/badge/Design-Responsive-purple)

A clean, responsive weather application built for outdoor enthusiasts like Jamie who need quick access to current weather conditions for any city around the world.

## 🌐 Live Demo
**[🚀 View Live Application](https://nithugoud.github.io/weather-now-app/)**

*Experience the Weather Now app in action! Search for any city worldwide and get instant weather information.*

## 🎯 Purpose

Weather Now addresses the specific need of outdoor enthusiasts who want to quickly check current weather conditions for any city. The application provides essential weather information in a user-friendly interface that works seamlessly on both desktop and mobile devices.

## ✨ Features

- **🔍 City Search**: Search for any city worldwide with intelligent error handling
- **🌡️ Current Weather**: Display temperature, feels-like temperature, and weather conditions
- **📊 Detailed Metrics**: Humidity, wind speed/direction, pressure, cloud cover, and precipitation
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Lightweight and optimized for quick loading
- **🚫 Error Handling**: Graceful handling of network errors and invalid city names
- **♿ Accessibility**: Supports high contrast mode and reduced motion preferences

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2.0
- **Styling**: Vanilla CSS with modern features (CSS Grid, Flexbox, CSS Variables)
- **API**: Open-Meteo API (no authentication required)
- **State Management**: React's built-in useState hooks
- **Build Tool**: Create React App
- **Deployment**: Ready for CodeSandbox, StackBlitz, Netlify, or Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**:
   ```bash
   git clone <your-repo-url>
   cd weather-now
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📡 API Integration

### Open-Meteo API

Weather Now uses the Open-Meteo API, which provides:
- **Free access** with no authentication required
- **High accuracy** weather data
- **Global coverage** for cities worldwide
- **Real-time updates** for current conditions

#### API Endpoints Used:

1. **Geocoding API**: `https://geocoding-api.open-meteo.com/v1/search`
   - Converts city names to coordinates
   - Provides city information (name, country, region)

2. **Weather API**: `https://api.open-meteo.com/v1/forecast`
   - Fetches current weather conditions
   - Includes comprehensive meteorological data

## 🏗️ Project Structure

```
weather-now/
├── public/
│   ├── index.html          # Main HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── SearchBar.js    # City search component
│   │   ├── SearchBar.css   # Search bar styles
│   │   ├── WeatherDisplay.js # Weather data display
│   │   ├── WeatherDisplay.css # Weather display styles
│   │   ├── ErrorMessage.js # Error handling component
│   │   └── ErrorMessage.css # Error message styles
│   ├── services/           # API services
│   │   └── weatherService.js # Weather API integration
│   ├── App.js             # Main application component
│   ├── App.css            # Main application styles
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Design Philosophy

### User Experience
- **Minimalist Interface**: Clean design focusing on essential information
- **Mobile-First**: Responsive design that works on all screen sizes
- **Fast Interactions**: Quick search and immediate results
- **Clear Feedback**: Loading states and informative error messages

### Visual Design
- **Modern Gradient Background**: Appealing blue gradient suggesting sky/weather
- **Card-Based Layout**: Information organized in easy-to-scan cards
- **Consistent Typography**: Clear hierarchy and readable fonts
- **Weather Icons**: Emoji-based icons for universal recognition
- **Smooth Animations**: Subtle transitions for enhanced user experience

## 🧪 Testing

### Manual Testing Checklist

- [ ] Search for valid city names (London, New York, Tokyo)
- [ ] Search for invalid city names (empty, non-existent)
- [ ] Test network error scenarios (disconnect internet)
- [ ] Verify responsive behavior on different screen sizes
- [ ] Check loading states and error messages
- [ ] Validate weather data accuracy
- [ ] Test example city buttons

### Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment Options

### CodeSandbox (Recommended for Demo)
1. Visit [CodeSandbox.io](https://codesandbox.io)
2. Create new sandbox with React template
3. Upload project files
4. Install dependencies automatically
5. Share the live URL

### StackBlitz
1. Visit [StackBlitz.com](https://stackblitz.com)
2. Create new React project
3. Import project files
4. Run with `npm start`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Get instant deployment URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow deployment prompts

## 🔧 Configuration

### Environment Variables (Optional)
While Open-Meteo doesn't require API keys, you can configure:

```env
REACT_APP_API_BASE_URL=https://api.open-meteo.com/v1
REACT_APP_GEOCODING_URL=https://geocoding-api.open-meteo.com/v1
```

### Customization Options

1. **Color Scheme**: Modify CSS variables in `src/index.css`
2. **Weather Icons**: Update emoji icons in `src/services/weatherService.js`
3. **API Endpoints**: Configure different weather API if needed
4. **Additional Metrics**: Add more weather parameters to the display

## 🐛 Troubleshooting

### Common Issues

**City not found**
- Verify city name spelling
- Try including country name (e.g., "Paris, France")
- Check for special characters

**Network errors**
- Verify internet connection
- Check if Open-Meteo API is accessible
- Try refreshing the page

**Slow loading**
- Check network speed
- API might be experiencing high traffic
- Try searching for a different city

## 📝 Development Notes

### Code Quality
- **Clean Code**: Readable, well-commented functions
- **Component Structure**: Modular, reusable components
- **Error Boundaries**: Comprehensive error handling
- **Performance**: Optimized API calls and rendering

### Future Enhancements
- [ ] Weather forecast (5-day outlook)
- [ ] Geolocation-based weather
- [ ] Favorite cities list
- [ ] Weather alerts and notifications
- [ ] Dark/light theme toggle
- [ ] Unit conversion (Celsius/Fahrenheit)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Open-Meteo**: Free weather API service
- **React Team**: For the excellent React framework
- **Weather Icons**: Emoji-based weather representations
- **Community**: For testing and feedback

## 👤 Author

Built as part of a take-home coding challenge to demonstrate:
- Understanding of user requirements
- Clean, responsive React development
- API integration skills
- Modern web development practices

---

**Weather Now** - Making weather information accessible for outdoor enthusiasts worldwide! 🌍⛅