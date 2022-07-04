import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RiShareForwardFill } from "react-icons/ri";
import WalletIcon from "../../assets/walletIcon.svg";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import useTask from "../../utils/tasks";

const WalletTransfer = () => {
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const { transfer } = useTask();
  const { connected } = useSelector((state) => state.connect);

  const formik = useFormik({
    initialValues: {
      address: "",
      date: "",
      receipentAddress: "",
      amount: "",
    },
    onSubmit: async (values) => {
      setMessage("Email submission successful! Check your email for the code.");
      setSubmitted(true);
      setShowModal(false);
      // console.log(values);
      await transfer(values.receipentAddress, values.date, values.amount); // get form value
    },
    validationSchema: yup.object({
      address: yup
        .string()
        .required("Input your wallet address")
        .min(20, "Must be a valid wallet address"),
      date: yup.string().required("Choose date"),
      receipentAddress: yup
        .string()
        .required("Input the receipent wallet address")
        .min(20, "Must be a valid receipent wallet address"),
      amount: yup.string().required("Enter an amount to transfer"),
    }),
  });

  return (
    <>
      <div className="flex justify-center place-content-center mb-[30px]">
        <button
          className="p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Make wallet tranfer
          <span>
            <RiShareForwardFill className="mt-1 ml-3 text-lg font-bold" />
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
                    <Image
                      width="50"
                      height="50"
                      src={WalletIcon}
                      className="px-2"
                      alt="schedule Icon"
                    />
                    <div>
                      <h3 className="text-center ml-3 font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">
                        Schedule wallet transfer
                      </h3>
                      <p className="text-center font-poppins font-normal text-[15px] leading-[22px] text-off-grey">
                        Transfer crypto to a wallet address
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="px-3 pt-1 w-full"
                  >
                    <div
                      hidden={!submitted}
                      className="text-green-600 ml-3 mb-2"
                      role="alert"
                    >
                      {message}
                    </div>

                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Your wallet address
                    </label>
                    <input
                      type="text"
                      placeholder="Input your wallet address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    />
                    {formik.errors.address && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.address}
                      </div>
                    )}

                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Set a date
                    </label>
                    <input
                      type="datetime-local"
                      placeholder="Set a date for transfer"
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      className="appearance-none  focus:outline-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    />
                    {formik.errors.date && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.date}
                      </div>
                    )}

                    {/* <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                    Set a time
                    </label>
                    <input 
                    type='time' 
                    placeholder="Set a time for transfer" 
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"/>
                    {formik.errors.time && (
                      <div className="text-red-500 mb-3">{formik.errors.time}</div>
                    )} */}

                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Receipent’s wallet address
                    </label>
                    <input
                      type="text"
                      placeholder="Input the wallet address of the receiver "
                      name="receipentAddress"
                      value={formik.values.receipentAddress}
                      onChange={formik.handleChange}
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    />
                    {formik.errors.receipentAddress && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.receipentAddress}
                      </div>
                    )}

                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Amount
                    </label>
                    <input
                      type="text"
                      placeholder="e.g 0.243 eth"
                      name="amount"
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-1"
                    />
                    {formik.errors.amount && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.amount}
                      </div>
                    )}

                    <div className="flex items-center mt-[20px] justify-center px-6 pt-1 pb-6 rounded-b">
                      <button
                        disable={!connected}
                        className="p-[15px] font-poppins font-semibold text-[18.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex justify-center w-2/3 text-center"
                        type="submit"
                      >
                        Schedule Transfer
                      </button>
                    </div>
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

export default WalletTransfer;
