import { SearchIcon, SunIcon } from "@heroicons/react/solid"

export default function Header() {
  return (
    <div className="flex items-center p-2 font-medium">
      <div>
        <img
          className="w-40 cursor-pointer hover:animate-pulse"
          src="/assets/header/cryptopunk-logo.png"
          alt=""
        />
      </div>

      <div className="bg-gray-700 flex-1 p-3 space-x-2 rounded-lg text-gray-400 flex items-center mx-4">
        <SearchIcon className="w-6 h-6" />
        <input
          className="bg-transparent flex-1 outline-none text-white font-medium"
          type="text"
          placeholder="Collection, item or user"
        />
      </div>

      <div className="hidden md:flex space-x-4 text-gray-500">
        <p className="cursor-pointer hover:text-gray-300">Drops</p>
        <p className="cursor-pointer hover:text-gray-300">Marketplace</p>
        <p className="cursor-pointer hover:text-gray-300">Create</p>
      </div>

      <div className="hidden md:block w-7 h-7 text-white mx-8">
        <SunIcon />
      </div>

      <button className="hidden md:block bg-gradient-to-r from-green-500 to-green-300 px-5 md:px-8 py-3 rounded-full font-medium truncate">
        GET IN
      </button>
    </div>
  )
}