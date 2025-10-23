import { React } from 'react'

function Header() {
  const profileUrl = "";

  return (

    <header className="bg-neutral-900 text-white p-4 flex items-center justify-between border-b-2 border-black">
      <nav>
        <ul className="flex space-x-7 font-bold text-lg ml-5">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Workouts</li>
            <li className="cursor-pointer">Meals</li>
        </ul>
      </nav>
      <img
        src="https://img.freepik.com/premium-vector/gray-picture-person-with-gray-background_1197690-22.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Profile"
        className="h-10 w-10 rounded-full"
      />
    </header>
  )
}

export default Header