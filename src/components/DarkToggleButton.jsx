import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

 export default function DarkToggleButton() {
  const {theme, toggleTheme} = useContext(ThemeContext)

  return <button onClick={toggleTheme} >{theme === 'dark' ? "☀︎" : "⏾" }</button>
 }