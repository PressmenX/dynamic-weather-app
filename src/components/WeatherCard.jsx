import ErrorData from "./ErrorData";
import LoadingSpinner from "./LoadingSpinner";

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
}) {

  if (isLoading) return <LoadingSpinner/>
  if (error) return <ErrorData message={error}/>

  return (
    <div className="flex flex-col items-center mx-auto w-80 border">
      <h1 className="font-bold">
        {queryCity}, {country}
      </h1>
      <h2 className="capitalize">{weather}</h2>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <p>
        {date} | {hour}
      </p>
      <span className="[grid-area:temp]">{Math.round(temp)}°C</span>
      <div className="flex gap-4 p-2 bg-blue-950 text-white [&_div]:flex [&_div]:flex-col [&_div]:items-center [&_span:first-child]:font-bold [&_span:first-child]:text-xl">
        <div>
          <span>{humidity}%</span>
          <span>Humidity</span>
        </div>
        <div>
          <span>{windSpeed}m/s</span>
          <span>Wind Speed</span>
        </div>
        <div>
          <span>{feelsLike}°C</span>
          <span>Feels Like</span>
        </div>
      </div>
    </div>
  );
}
