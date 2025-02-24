import { motion, useAnimation } from 'framer-motion'
import { span } from 'motion/react-client'
import React, { useState } from 'react'
import { Power4 } from 'gsap'
const Featured = () => {
    const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];

    const handleHover=(index)=>{
        cards[index].start({y:"0"})
    }
    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }
  return (
    <div  className='featured  w-full py-20'>
        <div className='Fone w-full  px-10 border-b-[1px] border-zinc-700 pb-10'>
            <h1 className='ftext text-7xl '>Featured projects</h1>
        </div>
        <div className='cardp px-10'>
            <div className='cards w-full h-fit flex gap-10 mt-10'>
                <motion.div
                onHoverStart={()=>handleHover(0)}
                onHoverEnd={()=>handleHoverEnd(0)}
             
                className='cardcontainer mb-24 relative  w-1/2 h-[80vh] '>
                    <div className='name flex items-center gap-2 py-4'>
                            <div className='point h-[0.8vw] w-[0.8vw] bg-white rounded-full'></div>
                        <h3 className='uppercase'>
                        Fyde
                        </h3>
                    </div>
                <h1 className='heading absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tight text-8xl'>
              {"FYDE".split("").map((item,index)=>{
                    return <motion.span
                    key={index}
                    initial={{y:"100%"}}
                    animate={cards[0]}
                    transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                    className='inline-block '
                     
                    >{item}</motion.span>
                })}
                </h1>
                <motion.div
                   whileHover={{scale:0.95}}
                   transition={{ease:[0.5, 1, 0.89, 1  ]}}
                className='card w-full h-full  rounded-xl overflow-hidden'>
                    <motion.img whileHover={{scale:1.2}} transition={{ease:[0.5, 1, 0.89, 1],delay:0.1}}  className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" alt="" />
                </motion.div>
                <div className='btnp w-full flex gap-4 p-4 '>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    audit
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    copy writing
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    salesdeck
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    slides design
                   </button>
                </div>
                </motion.div>

                <motion.div
                 onHoverStart={()=>handleHover(1)}
                onHoverEnd={()=>handleHoverEnd(1)}
                
                className='cardcontainer relative w-1/2 h-[80vh] '>
                    <div className='name flex items-center gap-2 py-4'>
                            <div className='point h-[0.8vw] w-[0.8vw] bg-white rounded-full'></div>
                        <h3 className='uppercase'>
                        Vise
                        </h3>
                    </div>
                <h1 className='heading absolute  text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tight text-8xl'>
                {"VISE".split("").map((item,index)=>{
                   return <motion.span
                   key={index}
                   initial={{y:"100%"}}
                   animate={cards[1]}
                   transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                   className='inline-block '
                    
                   >{item}</motion.span>
                })}
                </h1>
                <motion.div 
                whileHover={{scale:0.95}}
                transition={{ease:[0.5, 1, 0.89, 1  ]}}
                className='card w-full h-full  rounded-xl  overflow-hidden'>
                    <motion.img whileHover={{scale:1.2}} transition={{ease:[0.5, 1, 0.89, 1],delay:0.1}}  className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png" alt="" />
                </motion.div>
                <div className='btnp w-full flex gap-4 p-4 '>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    agency
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    company presentation
                   </button>
                   
                </div>
                </motion.div>
            </div>
            <div className='cards  w-full flex gap-10 mt-10'>
                <motion.div
                onHoverStart={()=>handleHover(2)}
                onHoverEnd={()=>handleHoverEnd(2)}
               
                className='cardcontainer relative  w-1/2 h-[80vh] '>
                    <div className='name flex items-center gap-2 py-4'>
                            <div className='point h-[0.8vw] w-[0.8vw] bg-white rounded-full'></div>
                        <h3 className='uppercase'>
                        Salience Labs
                        </h3>
                    </div>
                <h1 className='heading absolute text-[#CDEA68] flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tight text-8xl'>
              {"SALIENCE ".split("").map((item,index)=>{
                    return <motion.span
                    key={index}
                    initial={{y:"100%"}}
                    animate={cards[2]}
                    transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                    className='inline-block '
                     
                    >{item}</motion.span>
                })}
                </h1>
                <motion.div 
                 whileHover={{scale:0.95}}
                 transition={{ease:[0.5, 1, 0.89, 1  ]}}
                className='card w-full h-full  rounded-xl overflow-hidden'>
                    <motion.img whileHover={{scale:1.2}} transition={{ease:[0.5, 1, 0.89, 1],delay:0.1}} className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                </motion.div>
                <div className='btnp w-full flex gap-4 p-4 '>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    BRAND IDENTITY
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    pitch deck
                   </button>
                </div>
                </motion.div>
                <motion.div
                onHoverStart={()=>handleHover(3)}
                onHoverEnd={()=>handleHoverEnd(3)}
                
                 className='cardcontainer relative w-1/2 h-[80vh] '>
                    <div className='name flex items-center gap-2 py-4'>
                            <div className='point h-[0.8vw] w-[0.8vw] bg-white rounded-full'></div>
                        <h3 className='uppercase'>
                        Cardboard Spaceship
                        </h3>
                    </div>
                <h1 className='heading absolute text-[#CDEA68] flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tight text-8xl'>
                {"CARDBOARD ".split("").map((item,index)=>{
                   return <motion.span
                   key={index}
                   initial={{y:"100%"}}
                   animate={cards[3]}
                   transition={{ease:[0.22,1,0.36,1],delay:index*.05}}
                   className='inline-block '
                    
                   >{item}</motion.span>
                })}
                </h1>
                <motion.div 
                whileHover={{scale:0.95}}
                transition={{ease:[0.5, 1, 0.89, 1  ]}}
                className='card w-full h-full  rounded-xl  overflow-hidden'>
                    <motion.img whileHover={{scale:1.2}} transition={{ease:[0.5, 1, 0.89, 1],delay:0.1}}   className='h-full w-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </motion.div>
                <div className='btnp w-full flex gap-4 p-4 '>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    BRanded template
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    sales deck
                   </button>
                   <button className='uppercase px-4 py-1 border-[1px] border-white rounded-full'>
                    social media template
                   </button>
                </div>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
