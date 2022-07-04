import React, { useState } from "react";
import { RiAddFill } from 'react-icons/ri';
import settingIcon from '../../assets/settingIcon.svg';
import Toggle from "../Toggle";
import Image from 'next/image';
import InputEmail from "./InputEmail";

const EmailSetting = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex justify-end place-content-center mb-[30px] mt-5 mr-5">
          <button className="p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex"
          type="button"
          onClick={() => setShowModal(true)}
          >
            Schedule new task
            <span>
                <RiAddFill className="mt-1 ml-3 text-lg font-bold"/>
            </span>
          </button>
        </div>
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
                  <Image width="40" height="40" src={settingIcon} className="px-2" alt="schedule Icon" />
                  <div>
                  <h3 className="text-center ml- font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">Settings</h3>
                  <p className="text-center font-poppins font-normal text-[10px] leading-[15px] text-off-grey">Set your preferences</p>
                  </div>
                  </div>
                  
      
                </div>
                <div className="relative p-12 flex-auto">
                  <form className="flex flex-row  px-3 pt-1 w-full">
                    <div>
                      <h3 className="font-poppins text-[20px] leading-[30px] font-medium text-off-grey">Email Notifications</h3>
                      <p className="font-poppins text-[10px] leading-[15px] font-normal text-off-black">Receive email notifications of missed tasks and scheduled tasks</p>
                    </div>
                    <Toggle/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EmailSetting;