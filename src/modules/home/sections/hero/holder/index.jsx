import React from "react";
import holder from "../../../../../assets/43b9039f-bf0ab2ac.mp4";

export default function Holder() {
  return (
    <div className="">
      {" "}
      <video
        src={holder}
        autoPlay
        loop
        muted
        playsInline
        
      ></video>
    </div>
  );
}
