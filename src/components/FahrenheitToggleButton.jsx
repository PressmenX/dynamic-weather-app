export default function FahrenheitToggleButton({isFahrenheit, onFahrenheit}) {
  return <button onClick={()=>onFahrenheit(!isFahrenheit)}>{isFahrenheit ? " °F" : " °C"}</button>
}