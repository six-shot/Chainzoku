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
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Adjust the range as needed
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <div ref={ref} className="relative h-[230vh] overflow-hidden">
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          y: backgroundY,
        }}
      ></motion.div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Foreground Layer */}
      <motion.img
        src={bg2}
        className="absolute top-0 left-0 w-full pt-[150px] z-[30]"
        style={{ y: foregroundY }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center h-screen justify-center text-white">
        <img className="w-[1280px]" src={chainzoku} />
      </div>
    </div>
  );
}



