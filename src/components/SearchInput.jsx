import { Search } from "lucide-react";
import { useRef} from "react";

export default function SearchInput({onSearch}) {
  const inputRef = useRef(null)

  const handleInput = () => {
    onSearch(inputRef.current.value)
  }

  return <div className="flex items-center md:mx-auto">
    <input type="text" ref={inputRef} className="h-6 px-2 bg-white  rounded-bl-xl rounded-tl-xl text-sm text-gray-500 md:w-80" placeholder="Search City..."/>
    <button onClick={handleInput} className="h-6 px-2  rounded-br-xl rounded-tr-xl bg-gray-300 transition hover:bg-gray-400">
      <Search className="h-4 w-4 text-gray-800 "/>
    </button>
  </div>
}