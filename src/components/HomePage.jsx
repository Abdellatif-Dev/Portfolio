import React from 'react'
import { motion } from "framer-motion";
function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen text-white">
    <div className='grid grid-cols-2 gap-4'>
        <div className=" col-span-2">
        <h1 className='motion-preset-typewriter-[17] motion-duration-[5000ms] text-6xl mx-auto mb-10'>Hello visitor 👋 </h1>
        </div>
        <div className="col-span-1">
        <motion.p 
        initial={{x:-100 , opacity:0 }}
        whileInView={{x:0,opacity:1,}}
        className='text-2xl p-10 '
        >Welcome to my website! I'm a software developer
          with a passion for building innovative and user-friendly applications.</motion.p>
        </div>
        <div className="col-span-1  flex justify-around">
          <motion.img 
          initial={{opacity:0,x:100}}
          whileInView={{x: 0,opacity: 1,}}
          src="hq720.jpg" alt="" className='rounded-md' />
        </div>
    </div>
    </div>
  )
}

export default HomePage