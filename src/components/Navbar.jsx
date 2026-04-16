export default function Navbar({ children }) {
  return <nav className="fixed top-0 w-full h-[7vh] flex justify-between items-center px-2 py-2 bg-gray-300/50  border-b border-gray-400/50 backdrop-blur-2xl dark:bg-slate-600/50 dark:border-gray-950/50 md:px-8">{children}</nav>;
}
