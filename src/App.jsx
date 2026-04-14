import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch.jsx';
import SearchInput from './components/SearchInput.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import ErrorData from './components/ErrorData.jsx';
import DarkToggleButton from './components/DarkToggleButton.jsx';

export default function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
  const [queryCity, setQueryCity] = useState('Jakarta');
  const mainUrl = `${baseUrl}?q=${queryCity}&appid=${apiKey}&units=metric`;
  const { data, isLoading, error } = useFetch(mainUrl);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const handleSearch = (city) => setQueryCity(city);
  const handleDarkMode = (status) => setDarkMode(status)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', "dark")
    }
    else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    };
  }, [darkMode]);

  const weatherData = {
    queryCity: queryCity,
    country: data?.sys?.country,
    weather: data?.weather[0]?.description,
    date: new Date()
      .toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
      })
      .replaceAll(',', ''),
    hour: new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
    icon: data?.weather[0]?.icon,
    temp: data?.main?.temp,
    humidity: data?.main?.humidity,
    windSpeed: data?.wind?.speed,
    feelsLike: data?.main?.feels_like,
  };
  const status = { data, isLoading, error };
  return (
    <>
      <h1 className="bg-red-100 dark:bg-slate-800 dark:text-white">
        Hello world
      </h1>
      <DarkToggleButton onToggle={handleDarkMode} darkMode={darkMode}/>
      <SearchInput onSearch={handleSearch} />
      <WeatherCard {...status} {...weatherData} />
    </>
  );
}
