import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function AboutMe() {
  const [text, setText] = useState("Full Stack Devlopeur");
  const [Motion, setMotionClass] = useState("motion-preset-typewriter-[20]");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Full Stack Devlopeur"
          ? "Web Design"
          : "Full Stack Devlopeur"
      );
      setMotionClass((newText) =>
        newText === "motion-preset-typewriter-[20]"
          ? "motion-preset-typewriter-[10]"
          : "motion-preset-typewriter-[20]"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center items-center min-h-dvh text-white">
      <div className="grid grid-cols-2   max-[640px]:grid-cols-1 gap-4">
        <div className=" col-span-2  max-[640px]:col-span-1 ">
          <h1 className="motion-preset-typewriter-[17] motion-duration-[5000ms] bottom-0 dark:text-white text-black text-2xl mx-auto mb-10">
            Hello visitor 👋{" "}
          </h1>
        </div>
        <div className=" col-span-1 max-[640px]:order-last flex items-center  ">
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 120,
                delay: 0.8,
                duration: 0.5,
              },
            }}
            className="text-lg px-5 font-serif text-black dark:text-white   "
          >
            <div>
              <div className="flex justify-start space-x-1 ">
                <p> Hello ,I'm </p>
                <p
                  className={`${Motion} motion-duration-[5000ms] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent`}
                >
                  {text}
                </p>
              </div>
              <p className="text-lg  font-serif text-justify">
                Welcome to my website! I'm a full-stack developer with a passion
                for creating innovative and user-friendly applications. I have a
                strong background in web development, with expertise in HTML,
                CSS, JavaScript, and React.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="col-span-1 flex justify-center   ">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { type: "spring", stiffness: 120, delay: 0.8 },
            }}
            whileHover={{
              boxShadow: "0px 0px 12px rgba(0,0,255,1)",
              delay: 0.1,
              duration: 0.5,
            }}
            src="hq720.jpg"
            alt=""
            className="rounded-full border-2 border-sky-800  w-3/4"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
