export default function ErrorData({message}) {
  return <div className="flex flex-col items-center justify-center w-80 mx-auto min-h-60 border rounded-4xl bg-red-200 text-red-500 ">
    <span className="text-7xl rotate-180">ⓘ</span>
    <p>Error : {message}</p>
  </div>
}