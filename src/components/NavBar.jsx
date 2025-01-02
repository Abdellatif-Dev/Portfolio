import React, { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [active, setactive] = useState("about");

  return (
    <nav className="   flex justify-center  dark:text-white  text-black    ">
      
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0, boxShadow: "0px 0px 8px rgba(255,255,255,0.8)" }}
        className=" fixed  max-[640px]:bottom-0   border-2 border-black  py-2 px-4 rounded-3xl bg-transparent backdrop-blur-md my-3 mx-auto space-x-7"
      >
        <a href="#about">
          <motion.button
            animate={active === "about" ? { scale: 1.25 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={active === "about" ? {} : { scale: 1.25 }}
            onClick={() => setactive("about")}
          >
            about
          </motion.button>
        </a>
        <a href="#project">
          <motion.button
            animate={active === "project" ? { scale: 1.25  } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={active === "project" ? {} : { scale: 1.25 }}
            onClick={() => setactive("project")}
          >
            project
          </motion.button>
        </a>
        <a href="#githup">
          <motion.button
            animate={active === "githup" ? { scale: 1.25 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={active === "githup" ? {} : { scale: 1.25 }}
            onClick={() => setactive("githup")}
          >
            githup
          </motion.button>
        </a>
        <a href="#contact">
          <motion.button
            animate={active === "contact" ? { scale: 1.25 } : {}}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={active === "contact" ? {} : { scale: 1.25 }}
            onClick={() => setactive("contact")}
          >
            contact
          </motion.button>
        </a>
      </motion.div>
    </nav>
  );
}

export default NavBar;
