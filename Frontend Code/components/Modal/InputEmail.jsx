import React, { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import emailIcon from "../../assets/emailIcon.svg";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";

const InputEmail = () => {
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      setMessage("Email submission successful! Check your email for the code.");
      setSubmitted(true);
      // console.log(values) // get form value
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
    }),
  });

  return (
    <>
      <div className="flex justify-end place-content-center mb-[30px] mt-5 mr-5">
        <button
          className="p-[15px] font-poppins font-semibold text-[16.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Schedule new task
          <span>
            <RiAddFill className="mt-1 ml-3 text-lg font-bold" />
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
                      src={emailIcon}
                      className="px-2"
                      alt="schedule Icon"
                    />
                    <div>
                      <h3 className="text-center ml-3 font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">
                        Email Notifications
                      </h3>
                      <p className="text-center font-poppins font-normal text-[10px] leading-[15px] text-off-grey">
                        You will receive email notifications of missed tasks and
                        scheduled tasks
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative p-6 flex-auto">
                  <div
                    hidden={!submitted}
                    className="text-green-600 ml-3 mb-2"
                    role="alert"
                  >
                    {message}
                  </div>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="px-3 pt-1 w-full"
                  >
                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Your Email address
                    </label>

                    <input
                      type="text"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      placeholder="cryptolover1234@gmail.com"
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    />
                    {formik.errors.email && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.email}
                      </div>
                    )}

                    <p className="text-[10px] leading-[15px] font-normal font-poppins text-[#A8278C] ">
                      *A 6-digit token will be sent to your email for
                      verification
                    </p>
                    <div className="flex items-center justify-center mt-[20px] px-6 pt-1 pb-6 rounded-b">
                      <button
                        className="p-[15px] font-poppins font-semibold text-[18.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex justify-center w-2/3 text-center"
                        type="submit"
                      >
                        Send code to Email
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

export default InputEmail;
