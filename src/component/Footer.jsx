import React from 'react'
import { MdFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='text-white flex flex-col items-center h-screen gap-10 pt-12 a-container'>
        <p className='text-2xl oswald-banner'>SUBSCRIBE OUR NEWSLETTER</p>
        <div className='flex justify-center items-center gap-5 w-full'>
            <input className='bg-black border border-white outline-none py-4  placeholder:text-white  w-1/3' placeholder= "YOUR EMAIL" type="text" />
            <button type="button" className="border-white border sans-serif text-white text-red-700 hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-m p-4 text-center   dark:focus:ring-blue-800">SUBSCRIBE</button>
        </div>
        <div className='mt-10'>
        <img src="/img/Gabung-Logo-1.png" className='h-24' alt="logo" />
        </div>

        <div>
            <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
            <p>Ut elit tellus, luctus nec ullam corper mattis.</p>
        </div>
        <div className='flex gap-4'>
            <a className='hover:text-red-700 border rounded-full p-2' href="#"><MdFacebook/></a>
            <a className='hover:text-red-700 border rounded-full p-2' href="#"><AiFillTwitterCircle /></a>
            <a className='hover:text-red-700 border rounded-full p-2' href="#"><FaYoutube /></a>
            <a className='hover:text-red-700 border rounded-full p-2' href="#"><IoLogoInstagram /></a>
        </div>
        <div className='flex items-end w-full h-full '>
        <div className='border-t border-red-700 w-full text-center pt-5 '>
            <p >Copyright 2024 © All Right Reserved Design by Aryan Gupta</p>
        </div>
        </div>

    </div>
  )
}

export default Footer