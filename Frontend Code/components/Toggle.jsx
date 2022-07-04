import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  
  const toggleClass = ' transform translate-x-5 bg-[#A22C90] '
  const toggleClass2 = '  bg-white '
  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className ={"md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" + (toggle ? toggleClass2 : toggleClass)}
      ></div>
    </div>
  );
};

export default Toggle;