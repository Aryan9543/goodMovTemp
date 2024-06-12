import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {useSpring,animated} from 'react-spring';

const AboutUs = () => {

     function Number({n}) {
      const {number} = useSpring({
        from: {number: 0},
        number: n,
        delay: 400,
        config: { mass: 1, tension:20, friction:10 },       
      });

      return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
     }
  
    useEffect(() => {

        let ctx = gsap.context(() => {
    
          gsap.from(".left", 
            {    x:-200, 
                duration: 1
             }
          );
          gsap.to(".left",{
            x:0,
            duration:2,
          })
          gsap.from(".right", 
            {    y:200, 
                duration: 1,
                
             }
          );
          gsap.to(".right",{
            y:0,
            duration:3,
          })
          
        },);
    
        return () => ctx.revert();
    
      }, []);

  return (
    <div className='a-container mb-10'>
        <p className='text-red-700 mt-8 about'>about us</p>
        <div className='mt-8 flex  justify-between gap-x-20 max-[768px]:flex max-[768px]:flex-col max-[768px]:w-full max-[768px]:justify-center'>
            <div className='flex w-1/2 gap-x-6 left md:w-full '>
                <div className='text-white'>
                    <img  src="/img/About-Us-Image-1.jpg" alt="about-img" />
                    <div className='flex justify-end items-end'>
                    <span className='text-9xl inc'><Number n={20}/></span>
                    <span className='text-5xl text-red-700'>TH</span>
                    </div>
                    <p className='text-2xl'>YEARS OF EXPERIENCE</p>
                </div>
                <div className='flex items-end'>
                    <img src="/img/About-Us-Image-2.jpg" alt="about-img-2" srcset="" />
                </div>
            </div>

            <div className='text-white flex flex-col flex-wrap w-1/2 box-border'>
                <p className='text-5xl right'>ELEVATING ENTERTAINMENT SINCE 2014</p>

                <p className='pt-4'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Donec maximus diam ut nunc lobortis, pulvinar sodales orci hendrerit. Curabitur luctus tellus nec est aliquam lacinia. Nulla vel risus vel mauris interdum vehicula. Lorem ipsum dolor sit amet, consec tetur adipiscing elit. </p>
                <p className='pt-4'>Nam arcu metus, imperdiet eget venenatis eget, porttitor nec nunc. Donec auctor vulputate lobortis. Nunc convallis arcu sapien, a semper leo iaculis id. Nullam sed risus quis turpis tempus.</p>
                <div className='flex gap-12 pt-8'>
                    <div className='w-1/3'>
                    <img className='' src="/img/Award-1.png" alt="award-img"  />
                    </div>
                    <div className='w-1/3'>
                    <img className='' src="/img/Award-1.png" alt="award-img"  />
                    </div>
                    <div className='w-1/3'>
                    <img className='' src="/img/Award-1.png" alt="award-img"  />
                    </div>
                </div>

                <div className='w-1/3 pt-8'>
                <button type="button" className="border-white border sans-serif uppercase text-white text-redf-700 hover:text-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-m p-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">more about us</button>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default AboutUs