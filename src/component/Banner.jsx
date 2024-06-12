import React from 'react'
import { BannerList } from './BannerList'
import { GoPlay } from "react-icons/go";

function Banner() {
  const bannerItems = ['BILL SMITH |',' JENNIFER SHANCEZ | ',' SYLVESTER STULHEN | ',' HANK GRILLO | ',' MERIAM BALINA']
  return (
    <div className="bg-cover bg-center bg-no-repeat banner-img text-center text-white flex  justify-center top-4" style={{backgroundImage: "url('./public/img/Hero-image.jpg')"}}>
      <div className='flex flex-col justify-between mt-8'>
      <p className='text-2xl'>A FILM BY GOODMOV STUDIO</p>
        <div className='banner_content flex flex-col gap-4'>
        <p className='text-9xl font-semibold sans-serif oswald-banner'>48 HOURS WITH Z</p>
           <p className='text-2xl text-red-700 tracking-widest '>"OUTRUN OF THE Z, OUTLAST THE NIGHT"</p>
           <div className='text-2xl tracking-widest pb-4'>
             {bannerItems.map((item)=>{
              return <BannerList item={item} />
             })}
           </div>
           <div className='flex flex-row justify-center gap-4 items-center py-6'>
           <button type="button" className="border-white border sans-serif uppercase text-white text-red-700 hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-m p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">discover more</button>
            <div className='flex items-center gap-4'>
            <GoPlay className='text-center size-14 text-red-700 hover:text-white ' />
            <p >WATCH TRAILER</p>
            </div>
           </div>
        </div>
      </div>   
    </div>
  )
}

export default Banner