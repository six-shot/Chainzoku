import React from 'react'
import chainzoku from "../../../assets/icons/chainzoku.svg"

export default function Navbar() {
  return (
    <div className="fixed top-5 z-[1000] w-full px-5">
      <div className="flex justify-between items-center px-[2.8125rem] h-[80px]">
        <img className='w-[123px]' src={chainzoku} />
      </div>
    </div>
  );
}