import React from 'react'

const Cards = () => {
  return (
    <div className='box w-full h-screen bg-zinc-900 items-center px-32 flex gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex  items-center justify-center'>
            <img className='' src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2019-2022</button>
        </div>
        </div>
        <div className='cardcontainer cardc  flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
        <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute  tracking-tight px-5 py-1 border-2 rounded-full left-10 bottom-10'>RATING 5.0 ON CLUTCH </button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]'>
        <img className='h-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute px-5 py-1 border-2 rounded-full left-2 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>

        </div>

      
    </div>
  )
}

export default Cards
