



import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import bg from "../../../../assets/background.jpg";
import bg2 from "../../../../assets/blob_https___chainzoku.io_3de7a21b-5599-4eb7-80e2-6d1c8fcc6c22";
import Navbar from "../../../../components/global/navbar";
import chainzoku from "../../../../assets/icons/chainzoku.svg";

export default function MultiLayerParallax() {
  const ref = useRef(null);

  // Use Framer Motion's scroll hooks
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the backgrounds
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Background moves slower
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // Foreground moves faster
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "10%", "-20%"]
  ); // Content slight parallax effect

  return (
    <div ref={ref} className="relative h-[230vh] overflow-hidden">
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          y: backgroundY,
        }}
      ></motion.div>

      {/* Navbar */}
      <div className="relative z-[1000]">
        <Navbar />
      </div>

      {/* Foreground Layer */}
      <motion.img
        src={bg2}
        className="absolute top-0 left-0 w-full pt-[150px] z-[30]"
        style={{ y: foregroundY }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 flex  flex-col items-center h-screen justify-center text-white"
        style={{ y: contentY }} // Add parallax effect to content
      >
        <div className=" relative flex items-center justify-center h-[480px]">
          <img className="w-[1280px]" src={chainzoku} />
          <h1 className="absolute -bottom-10 agbuch_bold text-[.875rem] leading-[.875rem] uppercase tracking-[-.02em] text-center ">
            Mint your Zoku. Take a side.
          </h1>
        </div>
      </motion.div>
      <div className="fixed left-[2.8125rem] top-1/2 -translate-y-1/2">
        <ul className="ulll relative flex flex-col gap-[2.5rem] pl-[1.625rem] agbuch_bold  text-[#fffff7] text-[.6rem] leading-[0.875rem]">
          <li>
            <button className="relative btnnn  uppercase">Zokus</button>
          </li>
          <li>
            <button className="relative btnnnn uppercase">Clans</button>
          </li>
          <li>
            <button className="relative btnnnn uppercase">Vision</button>
          </li>
          <li>
            <button className="relative btnnnn uppercase">Custom</button>
          </li>
          <li>
            <button className="relative btnnnn uppercase">Roadmap</button>
          </li>
          <li>
            <button className="relative btnnnn uppercase">Team</button>
          </li>
          <li>
            <button className="relative btnnn uppercase">FAQ</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
