import React, { useState } from "react";
const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="absolute opacity-30 bg-black top-0 left-0 right-0 w-full h-full">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loader;
