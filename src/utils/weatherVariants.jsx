import { cva } from "class-variance-authority";


export const weatherVariants = cva(
  "flex flex-col items-center mx-auto h-[fit-content] w-80 px-8 py-4 rounded-4xl shadow-xl shadow-black/70  text-white bg-linear-to-br md:w-[60vw]",
  {
    variants : {
      weather : {
        clouds : "from-sky-800 via-sky-500 to-gray-300",
        clear : "from-orange-800 via-orange-500 to-gray-300",
        mist : "from-gray-600 via-gray-500 to-gray-300",
        snow : " text-gray-500 bg-linear-to-br from-cyan-300 via-cyan-100 to-gray-100",
        rain : "from-blue-950 via-blue-800 to-gray-300",
        drizzle : "from-gray-500 via-gray-500 to-gray-100",
        thunderstorm : "from-gray-900 via-gray-700 to-gray-500",
      }
    },
    defaultVariants : {
      weather : "clear",
    }
  }
)