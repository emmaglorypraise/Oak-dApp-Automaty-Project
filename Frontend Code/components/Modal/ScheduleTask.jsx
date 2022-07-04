import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiAddFill } from "react-icons/ri";
import scheduleIcon from "../../assets/scheduleIcon.svg";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup";
import useTask from "../../utils/tasks";

const ScheduleTask = () => {
  const [showModal, setShowModal] = useState(false);

  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const { createAutomationTask } = useTask();
  const { connected } = useSelector((state) => state.connect);

  const formik = useFormik({
    initialValues: {
      address: "",
      date: "",
      message: "",
    },
    onSubmit: async (values) => {
      setMessage("Email submission successful! Check your email for the code.");
      setSubmitted(true);
      setShowModal(false);
      // console.log(values);
      await createAutomationTask(values.address, values.message, values.date); // get form value
    },
    validationSchema: yup.object({
      address: yup
        .string()
        .required("Input your wallet address")
        .min(20, "Must be a valid wallet address"),
      date: yup.string().required("Choose date and Time"),
      // time: yup.string().required("Choose time"),
      message: yup.string().required("Enter a note for this task"),
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
                      src={scheduleIcon}
                      className="px-2 mr-3"
                      width="50"
                      height="50"
                      alt="schedule Icon"
                    />
                    <div>
                      <h3 className="text-center ml-3 font-poppins font-semibold text-[30px] leading-[45px] text-[#3A3737]">
                        Schedule New Task
                      </h3>
                      <p className="text-center font-poppins font-normal text-[15px] leading-[22px] text-off-grey">
                        Create events for the future
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
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="Input your wallet address"
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
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                      type="datetime-local"
                      placeholder="Set a date for task"
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
                      name="time"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                      type="time"
                      // step="3600"
                      placeholder="Set a time for task"
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    /> */}
                    {/* {formik.errors.time && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.time}
                      </div>
                    )} */}

                    <label className="block text-[#3A3737] text-poppins text-[13.0127px] leading-[20px] font-normal mb-1">
                      Message
                    </label>
                    <input
                      name="message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="e.g Send 10 eth daily"
                      className="appearance-none rounded-[5px] w-full py-2 px-3 text-[13.0127px] leading-[20px] bg-[#E3E3E3] text-placeholder-grey mb-3"
                    />
                    {formik.errors.message && (
                      <div className="text-red-500 mb-3">
                        {formik.errors.message}
                      </div>
                    )}

                    <div className="flex items-center mt-3 justify-center px-6 pt-1 pb-6 rounded-b">
                      <button
                        disabled={!connected}
                        className="p-[15px] font-poppins font-semibold text-[18.09px] leading-[24.1px] text-[#ffffff] bg-[#A22C90] shadow-button rounded-[19.636px] flex justify-center w-2/3 text-center"
                        type="submit"
                      >
                        Schedule Task
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

export default ScheduleTask;
