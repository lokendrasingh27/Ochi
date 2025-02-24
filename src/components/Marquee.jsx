import { motion } from 'motion/react'
import React, { useEffect } from 'react'

const Marquee = () => {
  
 

  return (
    <div data-scroll data-scroll-section  data-scroll-speed='.1' className='marquee w-full pt-20 pb-6 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300  flex pr-10 whitespace-nowrap overflow-hidden'>
        <motion.h1 
        initial={{
          x:"0"
        }}
        animate={{
           x:"-100%"
        }}
        transition={{
          repeat:Infinity,
          duration:5,
          ease:'linear'
        }}
        
        className='text-[28vw] leading-none font-semibold uppercase -mb-[2vw] -mt-[5vw] '>we are ochi</motion.h1>
        <motion.h1
        initial={{
          x:0
        }}
        animate={{
           x:"-100%"
        }}
        transition={{
          repeat:Infinity,
          duration:5,
          ease:'linear'
        }}
        
        className='text-[28vw] leading-none font-semibold uppercase  -mb-[2vw] -mt-[5vw] '>we are ochi</motion.h1>
        <motion.h1
        initial={{
          x:0
        }}
        animate={{
           x:"-100%"
        }}
        transition={{
          repeat:Infinity,
          duration:5,
          ease:'linear'
        }}
        
        className='text-[28vw] leading-none font-semibold uppercase  -mb-[2vw] -mt-[5vw]'>we are ochi</motion.h1>


      </div>
    </div>
  )
}

export default Marquee
