import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import bg from "../../../../assets/background.jpg";
import bg2 from "../../../../assets/blob_https___chainzoku.io_3de7a21b-5599-4eb7-80e2-6d1c8fcc6c22";
export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      className="bg-green-500 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <img src={bg2} className="sticky top-0 pt-[150px]" />
    </div>
  );
}
