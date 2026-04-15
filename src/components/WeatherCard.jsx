import { Droplets, MapPin, Thermometer, Wind } from 'lucide-react';
import toFahrenheit from '../utils/toFahrenheit';
import ErrorData from './ErrorData';
import LoadingSpinner from './LoadingSpinner';

export default function WeatherCard({
  queryCity,
  country,
  date,
  hour,
  weather,
  icon,
  temp,
  humidity,
  windSpeed,
  feelsLike,
  data,
  isLoading,
  error,
  isFahrenheit,
}) {
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorData message={error} />;

  return (
    <div className="flex flex-col items-center mx-auto w-100 px-8 py-4 rounded-4xl shadow-xl shadow-black/70 bg-linear-to-br from-gray-950 via-gray-800 to-gray-300 text-white">
      <span className="flex items-center gap-2 w-full text-md text-white/80">
        <MapPin className="h-4 w-4" />
        {queryCity}, {country}
      </span>
      <div className="w-full flex items-center justify-between ">
        <span className="font-bold text-6xl">
          {isFahrenheit ? `${toFahrenheit(temp)}°F` : `${Math.round(temp)}°C`}
        </span>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      </div>
      <p className=" w-full capitalize">{weather}</p>
      <div className="flex flex-col items-end w-full">
        <span className="font-bold text-xl">{date}</span>
        <span className="font-bold text-3xl">{hour}</span>
      </div>
      <div
        className="
      flex gap-4 px-2 py-6
      [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_div]:rounded-xl [&_div]:p-2 [&_div]:border
       [&_div]:bg-white/20 [&_div]:backdrop-blur-md  [&_div]:w-25
       [&_span:nth-child(2)]:text-sm
       [&_span:nth-child(3)]:font-bold
       [&_svg]:h-8 [&_svg]:w-8"
      >
        <div>
          <Droplets className="text-blue-400" />
          <span>Humidity</span>
          <span>{humidity}%</span>
        </div>
        <div>
          <Wind className="text-green-500" />
          <span>Wind Speed</span>
          <span>{windSpeed}m/s</span>
        </div>
        <div>
          <Thermometer className="text-orange-400" />
          <span>Feels Like</span>
          <span>
            {isFahrenheit ? `${toFahrenheit(feelsLike)}°F` : `${feelsLike}°C`}
          </span>
        </div>
      </div>
    </div>
  );
}
