import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const Landing = () => {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-fit bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
        {["we create","eye-opening","presentation"].map((items,index)=>{
           return  <div key={index} className="marker    ">
            <div className='w-fit flex items-end overflow-hidden '>
              {index==1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}
                 className='mr-[1vw] rounded w-[8vw] relative overflow-hidden h-[5.5vw] bg-green-500'>
                  <img className='object-cover w-full h-full' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                 </motion.div>
                
                )}
           <h1 key={index} className='lntext pt-2  text-[9vw] leading-[.74]  uppercase'>{items}</h1>
            </div>
       </div> 
        })}
        
      </div>
      <div className='landing border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20' >
        {["for public and private companies","from the first pitch to IPO"].map((items,index)=> <p key={index} className=' text-md font-light leading-none tracking-tight' >{items}</p>)}
        <div className="start flex items-center gap-5">
            <div className='start relative  px-5 py-2 rounded-full border-[1px] font-light text-md uppercase  border-zinc-500'>
              Start the project
              </div>
            <div className='rr h-10 w-10 border-[1px] flex items-center justify-center border-zinc-500  rounded-full'>
               <span className='rotate-[45deg]'>
               <FaArrowUpLong/>
               </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
