export default function FahrenheitToggleButton({isFahrenheit, onFahrenheit}) {
  return <button onClick={()=>onFahrenheit(!isFahrenheit)}>{isFahrenheit ? " °C" : " °F"}</button>
}