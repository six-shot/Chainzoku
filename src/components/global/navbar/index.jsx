import React from "react";
import chainzoku from "../../../assets/icons/chainzoku.svg";
import discord from "../../../assets/icons/discord.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";
import zokus from "../../../assets/icons/zokus.svg";

export default function Navbar() {
  return (
    <div className="fixed top-5 z-[1000] w-full ">
      <div className="flex justify-between items-center px-[2.8125rem] h-[80px]">
        <img className="w-[123px]" src={chainzoku} />
        <nav>
          <ul className="flex items-center font-bold italic">
            <li className="bg-[#cdfb52] h-[29px] rounded-[15px] px-[.625rem] leading-[1.2] flex items-center ">
              Home
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              Auctions
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              Box Reveal
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              Lore
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              My Zoku
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              Jumps
            </li>
            <li className="px-[.625rem] h-[29px] text-[#fffff7] leading-[1.2] flex items-center ">
              Shops
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex items-center gap-[.9375rem]">
            <li>
              <img src={discord} alt="discord" />
            </li>
            <li>
              <img src={twitter} alt="discord" />
            </li>
            <li>
              <img src={instagram} alt="discord" />
            </li>
            <li>
              <img src={zokus} alt="discord" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
