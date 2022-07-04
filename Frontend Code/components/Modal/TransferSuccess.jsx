import React, { useState } from "react";
import { RiShareForwardFill } from 'react-icons/ri';
import successIcon from '../../assets/successIcon.svg';
import Image from 'next/image';

const TransferSuccess = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex justify-center place-content-center mb-[30px]'>
          <button className='p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex'
          type="button"
          onClick={() => setShowModal(true)}
          >Make wallet tranfer
          <span>
              < RiShareForwardFill className="mt-1 ml-3 text-lg font-bold"/>
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
                </div>
                <div className="relative p-6  flex justify-center flex-col place-items-center">
                  <Image width="146" height="146" src={successIcon} alt="success icon" className="px-3 mb-3" />
                  <div>
                    <p className="text-center font-poppins font-medium text-[20px] leading-[30px] text-[#535151]">
                    You have successfully scheduled a transfer.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-1 pb-12 rounded-b">
                  <button
                    className="p-[15px] font-poppins font-semibold text-[18.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex justify-center w-2/3 text-center"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default TransferSuccess;