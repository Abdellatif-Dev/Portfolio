import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import { useState } from 'react';
import { PiMoonStarsFill } from "react-icons/pi";

import { TbSun } from "react-icons/tb";

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="relative min-h-dvh dark:bg-[radial-gradient(circle_farthest-side,rgba(0,15,140,.18),rgba(0,0,0,0))]  bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">

        <div className="absolute inset-0  bg-slate-200 dark:bg-slate-950 dark:bg-[radial-gradient(circle_farthest-side,rgba(25,0,12,.15),rgba(25,25,25,0))] bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]  backdrop-blur-xl -z-10"></div>
        <div>
          <header className=''>
            <motion.div
            initial={{opacity:0}} 
            animate={{opacity:1,transition:{delay:1,duration:0.5}}}
            whileHover={dark?{ boxShadow: "0px 0px 12px rgba(255,255,255,1)" }
              :{ boxShadow: "0px 0px 12px rgba(0,0,0,1)" }}
            className=' top-4 right-2 bg-black dark:bg-slate-100  rounded-full w-8 h-8 fixed flex justify-center  items-center'>
              <PiMoonStarsFill className={dark ? ' w-7 h-8 hover:text-gray-400' : 'hidden'} onClick={()=>setDark(false)} />
              <TbSun className={dark ? 'hidden' : ' text-white w-7 h-8 hover:text-yellow-400'} onClick={()=>setDark(true)} />
            </motion.div>
            <NavBar />
          </header>

          <section className=" " id="about">
            <AboutMe />
          </section>

          <section id="project">
           {/*  <HomePage /> */}

          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
