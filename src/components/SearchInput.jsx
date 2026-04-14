import { useRef} from "react";

export default function SearchInput({onSearch}) {
  const inputRef = useRef(null)

  const handleInput = () => {
    onSearch(inputRef.current.value)
  }

  return <div>
    <input type="text" ref={inputRef} />
    <button onClick={handleInput}>Click Me</button>
  </div>
}