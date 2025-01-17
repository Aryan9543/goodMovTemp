import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className=" w-full z-20 top-0 start-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./public/img/Gabung-Logo-1.png" className="h-14" alt="Logo" />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="border-white border sans-serif uppercase text-white text-redf-700 hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-m p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">contact us</button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({isActive})=> `${(isActive) ? "text-red-700" : "text-white-900" } tracking-widest block py-2 px-3  rounded md:bg-transparent  md:p-0 `} >HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({isActive})=> `${(isActive) ? "text-red-700" : "text-white-900"} tracking-widest block py-2 px-3  rounded  md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-white-700`}>ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/service" className={({isActive})=>`${(isActive) ? "text-red-700" : "text-white-900"} tracking-widest block py-2 px-3  rounded  md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-blue-500`}>SERVICES</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Header