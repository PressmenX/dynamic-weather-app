import { useState } from 'react';
import { useFetch } from './hooks/useFetch.jsx';
import SearchInput from './components/SearchInput.jsx';
import WeatherCard from './components/WeatherCard.jsx';
import FahrenheitToggleButton from './components/FahrenheitToggleButton.jsx';
import DarkToggleButton from './components/DarkToggleButton.jsx';
import Navbar from './components/Navbar.jsx';
import MainSection from './components/MainSection.jsx';

export default function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
  const [queryCity, setQueryCity] = useState('Jakarta');
  const mainUrl = `${baseUrl}?q=${queryCity}&appid=${apiKey}&units=metric`;
  const { data, isLoading, error } = useFetch(mainUrl);
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const handleSearch = (city) => setQueryCity(city);
  const handleFahrenheit = (status) => setIsFahrenheit(status);

  const weatherData = {
    weatherType: data?.weather[0]?.main.toLowerCase() ?? 'clear',
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
  const status = { data, isLoading, error, isFahrenheit };
  return (
    <>
      <Navbar>
          <SearchInput onSearch={handleSearch} />
        <div className='flex gap-2'>
          <FahrenheitToggleButton
            onFahrenheit={handleFahrenheit}
            isFahrenheit={isFahrenheit}
          />
          <DarkToggleButton />
        </div>
      </Navbar>
      <MainSection>
        <WeatherCard {...status} {...weatherData} />
      </MainSection>
    </>
  );
}
