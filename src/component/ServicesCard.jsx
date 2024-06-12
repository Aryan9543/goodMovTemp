import React from 'react'

const ServicesCard = ({item}) => {
  return (
        <div className='bg-gray-950 s-card p-10 shadow flex flex-col justify-between '>
          <img className='w-14' src={item.url} alt="services-img" />
          <p className='text-white text-2xl oswald-banner font-medium tracking-widest'>{item.content}</p>
      </div>

      
      
  )
}

export default ServicesCard