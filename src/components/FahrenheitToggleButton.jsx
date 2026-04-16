export default function FahrenheitToggleButton({isFahrenheit, onFahrenheit}) {
  return <button onClick={()=>onFahrenheit(!isFahrenheit)} className="bg-gray-200 h-6 w-6 rounded-full shadow shadow-black dark:text-white dark:bg-slate-700">{isFahrenheit ? " °C" : " °F"}</button>
}