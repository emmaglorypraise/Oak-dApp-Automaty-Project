import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoMdNotifications,
  IoMdSettings,
  IoIosArrowDown,
} from "react-icons/io";
import settingIcon from "../assets/settingIcon.svg";
import Toggle from "./Toggle.jsx";
import logo from "../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    // console.log("works");
  };
  return (
    <>
      <nav className="relative flex items-center flex-wrap justify-between pt-[20px] pb-[10px] px-[20px]  md:p-[40px] ">
        <ToastContainer />
        <Link href="/">
          <div className="flex justify-start items-center md:gap-[55px]">
            <Image src={logo} width="53.02" height="53.04" alt="logo" />
          </div>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-[#9E2F92] rounded lg:hidden text-[#9E2F92] ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } w-[90%] lg:flex lg:flex-grow lg:justify-between  lg:w-auto`}
        >
          <div className="flex lg:flex-row flex-col justify-evenly pl-[5px] mt-3 lg:mt-0  lg:items-center lg:ml-[20px] lg:gap-[59px] font-normal text-base text-[#3A3737CC]">
            <span className="font-medium  mb-2 lg:mb-0">
              <Link href="/">Dashboard</Link>
            </span>
            <span className="font-medium mb-2 lg:mb-0">
              <Link href="/calender">Calendar</Link>
            </span>
            <span className="font-medium mb-2 lg:mb-0">Wallet</span>
            <span className="font-medium mb-2 lg:mb-0">Market</span>
          </div>
          <div className="flex items-center justify-start my-3 lg:my-0 lg:justify-end lg:gap-[21px]">
            <IoMdNotifications className="mr-4 lg:mr-0" size={20} />
            <IoMdSettings
              className="mr-4 lg:mr-0"
              size={20}
              onClick={() => setShowModal(true)}
            />
            {showModal ? (
              <>
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto  mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className=" px-8 pb-2 mt-4  w-full pt-2 rounded-t ">
                        <button
                          className="bg-transparent border-0 mb-4 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-8 text-xl block py-0 rounded-full">
                            x
                          </span>
                        </button>
                        <div className="mt-4 flex flex-row justify-start">
                          <Image
                            src={settingIcon}
                            className="px-2"
                            width={76}
                            alt="schedule Icon"
                          />
                          <div>
                            <h3 className="text-center font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">
                              Settings
                            </h3>
                            <p className="text-center font-poppins font-normal text-[10px] leading-[15px] text-off-grey">
                              Set your preferences
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative p-12 flex-auto">
                        <form className="flex flex-row  px-3 pt-1 w-full">
                          <div>
                            <h3 className="font-poppins text-[20px] leading-[30px] font-medium text-off-grey">
                              Email Notifications
                            </h3>
                            <p className="font-poppins text-[10px] leading-[15px] font-normal text-off-black">
                              Receive email notifications of missed tasks and
                              scheduled tasks
                            </p>
                          </div>
                          <Toggle />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            <span className="text-sm mr-4">Clara Mary</span>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full w-[24px] h-[24px]"
              alt=""
            />
            <IoIosArrowDown className="ml-4 lg:ml-0" size={20} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
