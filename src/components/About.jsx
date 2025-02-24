import React from 'react'

const About = () => {
  return (
    <div className='about w-full h-fit  p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[4vw] leading-[4.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='ab w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-bg-[#CDEA68]'>
           <div className="one w-1/2 ">
           <h1 className='abouttext text-6xl'>Our approach :</h1>
           <button className='aboutbtn flex gap-10 items-center  uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
           </button>
           </div>
           <div className='aboutimg w-1/2 h-[70vh] rounded-3xl overflow-hidden bg-[#b0c859]'>
           <img className='object-cover h-full w-full ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
           </div>

      </div>
    </div>
  )
}

export default About

