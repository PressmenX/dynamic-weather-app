export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-80 mx-auto min-h-60 border rounded-4xl text-blue-500 bg-blue-100">
      <div className="rounded-full h-14 w-14 border-b-2 animate-spin [animation-duration:500ms]"></div>
      <p>Loading...</p>
    </div>
  );
}
