import React, { useEffect } from 'react'
import ServicesCard from './ServicesCard'
import { gsap } from "gsap";

const Services = () => {
  
  useEffect(() => {

    let ctx = gsap.context(() => {

      gsap.from(".servicesCard", {
        opacity: 0, 
        x: -400, 
        duration: 2
      });
      gsap.to(".servicesCard",{
        opacity: 1, 
        duration:2
      })
      
    },);

    return () => ctx.revert();

  }, []);
  

  const data = [
    {
      url:"/img/Services-1.png",
      content:"SCRIPT DEVELOPMENT",
    },
    {
      url:"/img/Services-2.png",
      content:"PRE-PRODUCTION PLANNING",
    },
    {
      url:"/img/Services-3.png",
      content:"DIRECTING",
    },
    {
      url:"/img/Services-4.png",
      content:"CINEMATOGRAPHY",
    },
    {
      url:"/img/Services-5.png",
      content:"PRODUCTION MANAGEMENT",
    },
    {
      url:"/img/Services-6.png",
      content:"SOUND DESIGN & EDITING",
    },
    {
      url:"/img/Services-7.png",
      content:"POST-PRODUCTION SERVICES",
    },
    {
      url:"/img/Services-8.png",
      content:"DISTRIBUTION & MARKETING",
    },
    
  ]
  return (
    <div>
        <div className='a-container mt-8'>
        <p className='text-red-700 service'>services</p>
        <p className='text-5xl text-white text-right font-medium oswald-banner py-5'>LET'S MAKE AMAZING THINGS TOGETHER</p>
        <div className='flex flex-wrap gap-8 servicesCard'>
        {data.map((item) => {
           return <ServicesCard item={item}/>
        })}
        </div>
        </div>
        <div className='services-banner pt-10'>
        <div className="bg-cover w-full h-full pt-10" style={{backgroundImage: "url('./public/img/serviceBanner.jpg')"}}>
        </div>
        </div>
    </div>
  )
}

export default Services