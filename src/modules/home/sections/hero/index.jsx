import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import bg from "../../../../assets/background.jpg";
import bg2 from "../../../../assets/blob_https___chainzoku.io_3de7a21b-5599-4eb7-80e2-6d1c8fcc6c22";
import Navbar from "../../../../components/global/navbar";
import chainzoku from "../../../../assets/icons/chainzoku.svg";
import first from "../../../../assets/8b3d39.webp";
import second from "../../../../assets/b1771e.webp";
import secondtwo from "../../../../assets/292f93.webp";
import third from "../../../../assets/292f93.webp";
import Marquee from "react-fast-marquee";
import star from "../../../../assets/icons/star.svg";
import playvideo from "../../../../assets/3332994918.mp4";
import playtext from "../../../../assets/icons/play.svg";
import teaserone from "../../../../assets/3332994918 (1).mp4";
import teasertwo from "../../../../assets/da4a77fb-8eb78ee1.mp4";
import teaserthree from "../../../../assets/fc6e2097-899f5819.mp4";
import teaserfour from "../../../../assets/74761a78-6a8df2a8.mp4";
import teaserfive from "../../../../assets/9af7f438-3a5b4773.mp4";
import close from "../../../../assets/close.svg"
export default function MultiLayerParallax() {
  const teasers = [
    {
      title: "Teaser1",
      number: "#1",
      videoSrc: teaserone,
    },
    {
      title: "Teaser2",
      number: "#2",
      videoSrc: teasertwo,
    },
    {
      title: "Teaser3",
      number: "#3",
      videoSrc: teaserthree,
    },
    {
      title: "Teaser4",
      number: "#4",
      videoSrc: teaserfour,
    },
    {
      title: "Teaser5",
      number: "#5",
      videoSrc: teaserfive,
    },
  ];
  const [toggle, setToggle] = useState(false);
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
      <div className=" absolute bottom-[15%] z-[10] w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
        <Marquee className="flex items-center" direction="left" speed={15}>
          <img src={third} alt="third" />
          <img src={first} alt="third" />
        </Marquee>
      </div>
      <div className=" absolute bottom-[27%] z-[10]  w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
        <Marquee className="flex items-center" direction="left" speed={12.5}>
          <img src={first} alt="third" />
          <img src={second} alt="third" />
        </Marquee>
      </div>

      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover "
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
      <div className="">
        <motion.img
          src={bg2}
          className="absolute top-0 left-0 w-full pt-[150px] z-[30] "
          style={{ y: foregroundY }}
        />
        <div className="absolute top-0 z-[]"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 flex  flex-col items-center h-screen justify-center text-white"
        style={{ y: contentY }} // Add parallax effect to content
      >
        <div className=" relative flex items-center justify-center h-[480px]">
          <img className="w-[1280px] relative z-[10]" src={chainzoku} />
          <h1 className="absolute -bottom-10 agbuch_bold text-[.875rem] leading-[.875rem] uppercase tracking-[-.02em] text-center z-20">
            Mint your Zoku. Take a side.
          </h1>
        </div>
        <div className=" absolute bottom-[11%]   w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
          <Marquee className="flex items-center" direction="left" speed={15}>
            <img src={first} alt="first" />
            <img src={second} alt="first" />
          </Marquee>
        </div>
        {/* <div className=" absolute bottom-[0] z-[10] w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
          <Marquee className="flex items-center" direction="left" speed={11.54}>
            <img src={second} alt="third" />
            <img src={secondtwo} alt="third" />
          </Marquee>
        </div> */}
        {/* <div className=" absolute -bottom-[15%] z-[10] w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
          <Marquee className="flex items-center" direction="left" speed={15}>
            <img src={third} alt="third" />
            <img src={first} alt="third" />
          </Marquee>
        </div>
        <div className=" absolute -bottom-[27%] z-[10]  w-[150vw] transform -translate-x-[20vw] rotate-[20.94deg]">
          <Marquee className="flex items-center" direction="left" speed={12.5}>
            <img src={first} alt="third" />
            <img src={second} alt="third" />
          </Marquee>
        </div> */}
      </motion.div>
      <div className="fixed z-[200] bottom-0 w-full flex justify-between items-end px-[2.8125rem] pb-[2.8125rem]">
        <img src={star} />
        <div className="w-[15.12rem] h-[8rem] relative group cursor-pointer  ">
          <img
            onClick={() => setToggle(!toggle)}
            src={playtext}
            alt="playtext"
            className="absolute -left-2 top-1/2 transform -translate-y-1/2 group-hover:left-1/2 group-hover:translate-x-[-50%] transition-all duration-300 z-[10000]"
          />

          <div className="relative clip-right  overflow-hidden">
            <div className="absolute top-0 left-[-100%] bg-black opacity-0 group-hover:left-0 group-hover:opacity-100 transition-all duration-300 w-full h-full z-[200] clip-right"></div>
            <div className="relative">
              <video
                src={playvideo}
                autoPlay
                loop
                muted
                playsInline
                className="clip-right"
              ></video>
            </div>
          </div>
          <p className="previewtext text-[6.25rem] leading-[-.02em] drukheavy">
            PLAY
          </p>
        </div>
      </div>
      <div className="w-[15.12rem] h-[8rem] relative group cursor-pointer clip-right"></div>

      <div className="fixed z-[200] left-[2.8125rem] top-1/2 -translate-y-1/2">
        <ul className="ulll relative flex flex-col gap-[2.5rem] pl-[1.625rem] agbuch_bold  text-[#fffff7] text-[.6rem] leading-[0.875rem]">
          <li>
            <button className="relative btnnn  uppercase cursor-pointer">
              Zokus
            </button>
          </li>
          <li>
            <button className="relative btnnnn uppercase cursor-pointer">
              Clans
            </button>
          </li>
          <li>
            <button className="relative btnnnn uppercase cursor-pointer">
              Vision
            </button>
          </li>
          <li>
            <button className="relative btnnnn uppercase cursor-pointer">
              Custom
            </button>
          </li>
          <li>
            <button className="relative btnnnn uppercase cursor-pointer">
              Roadmap
            </button>
          </li>
          <li>
            <button className="relative btnnnn uppercase cursor-pointer">
              Team
            </button>
          </li>
          <li className="">
            <button className="relative btnnn uppercase cursor-pointer">
              FAQ
            </button>
          </li>
        </ul>
      </div>
      <div
        className={`${
          toggle ? "flex flex-col " : "hidden"
        } fixed top-0 right-0 w-[50vw] overflow-x-hidden cursor-pointer h-screen overflow-scroll z-[3000] bg-white`}
      >
        {/* Overlay */}
        {toggle && (
          <div
            onClick={() => setToggle(false)} // Close sidebar when clicking on the overlay
            className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-[1000]"
          />
        )}

        {/* Sidebar Content */}
        <div className="relative h-screen z-[3000]">
          <ul className="flex flex-col gap-[1.25rem] p-[2.8125rem] bg-white">
            {teasers.map((teaser, index) => (
              <li key={index}>
                <div>
                  <div className="flex justify-between items-center text-[6.25rem] leading-[0.8] tracking-[-.02em] drukheavy uppercase pb-[1.25rem]">
                    <h4>{teaser.title}</h4>
                    <h4>{teaser.number}</h4>
                  </div>
                  <div className="w-full h-[354px] rounded-[.5rem]">
                    <video
                      src={teaser.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-[.5rem] w-full h-full object-cover"
                    ></video>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
