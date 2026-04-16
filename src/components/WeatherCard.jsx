import { Droplets, MapPin, Thermometer, Wind } from 'lucide-react';
import toFahrenheit from '../utils/toFahrenheit';
import ErrorData from './ErrorData';
import LoadingSpinner from './LoadingSpinner';
import { cn } from '../utils/cn';
import { weatherVariants } from '../utils/weatherVariants';



export default function WeatherCard({
  weatherType,
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
  if (error || !data) return <ErrorData message={error} />;

  
  return (
    <div className={cn(weatherVariants({weather : weatherType}))}>
      <span className="flex items-center gap-2 w-full text-md opacity-70 md:text-xl">
        <MapPin className="h-4 w-4" />
        {queryCity}, {country}
      </span>
      <div className="w-full flex items-center justify-between">
        <span className="font-bold text-4xl md:text-7xl">
          {isFahrenheit ? `${toFahrenheit(temp)}°F` : `${Math.round(temp)}°C`}
        </span>
        <div className='grid place-items-center overflow-hidden w-20 h-20'>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className='md:scale-140' />
        </div>
      </div>
      <p className=" w-full capitalize text-sm md:text-xl">{weather}</p>
      <div className="flex flex-col items-end w-full">
        <span className="font-bold text-sm md:text-2xl">{date}</span>
        <span className="font-bold text-xl md:text-4xl">{hour}</span>
      </div>
      <div
        className="
      flex flex-col items-center gap-2 w-full mt-4 px-2 py-2
      [&_div]:flex [&_div]:flex-row [&_div]:items-center [&_div]:rounded-xl [&_div]:p-2 [&_div]:border [&_div]:justify-between  [&_div]:gap-2
       [&_div]:bg-white/20 [&_div]:backdrop-blur-xl  [&_div]:w-full
       [&_span:nth-child(2)]:text-sm  [&_span:nth-child(2)]:flex-1
       [&_span:nth-child(3)]:font-bold
       [&_svg]:h-10 [&_svg]:w-10 [&_svg]:bg-white/70 [&_svg]:rounded-full [&_svg]:p-2
       md:mt-8 md:flex-row md:[&_div]:flex-col md:[&_span:nth-child(3)]:text-2xl "
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
