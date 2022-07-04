import React from "react";
import { useSelector } from "react-redux";
import { RiArrowDownSLine, RiCheckboxBlankCircleFill } from "react-icons/ri";
import pencil from "../assets/pencil.svg";
import Image from "next/image";
import metamask from "../assets/metamask.png";
import ScheduleTask from "./Modal/ScheduleTask";
import { addressShortner } from "../utils/helper";

const style = {
  wrapper: `flex flex-col md:flex-row mt-[30px] px-[10px] md:pl-[40px] md:pr-[40px]`,
  TaskContainer: `bg-[#FFF8F8] w-full md:w-3/5 mx-auto mb-[15px] md:mr-[10px] shadow-container rounded-[8.77px]`,
  assetContainer: `bg-[#FFF8F8] w-full md:w-2/5 mx-auto md:ml-[10px] shadow-container rounded-[8.77px]`,
};
const TaskContainer = () => {
  const { allTasks } = useSelector((state) => state.task);
  return (
    <div className={style.wrapper}>
      <div className={style.TaskContainer}>
        <div className="flex justify-between pt-8 pb-5 px-5">
          <h1 className="flex text-[#9E2F92] font-semibold text-[20px] leading-[30px] font-poppins">
            Current Task List{" "}
            <span>
              <div className="ml-[10px]">
                <Image
                  width="37"
                  height="36.68"
                  className="ml-5"
                  src={pencil}
                  alt="pencil icon"
                />
              </div>
            </span>{" "}
          </h1>
          <div className="flex"></div>
          <h1 className="flex text-[#A22C90] text-[14px] leading-[21px] font-medium font-poppins">
            View all{" "}
            <span>
              <RiArrowDownSLine className="ml-3" />
            </span>
          </h1>
        </div>
        <div className="w-full mx-auto">
          <div className="bg-light-pink rounded-box flex justify-between p-[20px]">
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Task ID
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Target Address
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Trigger
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Message
            </span>
          </div>
          {allTasks &&
            allTasks?.map((task) => {
              return (
                <div
                  key={task.id}
                  className="bg-white  flex justify-between p-4 mb-2"
                >
                  <span className="text-[14px] leading-[21px] font-medium text-off-grey font-poppins flex">
                    {task.id}
                  </span>
                  <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
                    {addressShortner(task?.address)}
                  </span>
                  <span className="text-[12px] leading-[18px] font-medium text-[#A8278C] font-poppins">
                    {task.timeSlot}
                  </span>
                  <span className="text-[12px] leading-[18px] font-medium text-off-grey font-poppins">
                    {task.message}
                  </span>
                </div>
              );
            })}
          {allTasks.length === 0 && (
            <div className="flex justify-center items-center w-full py-[30px] my-[60px]">
              <h1 className="flex text-[#A22C90] text-[20px] leading-[21px] font-medium font-poppins">
                No Task Yet
              </h1>
            </div>
          )}
        </div>
        <ScheduleTask />
      </div>
      <div className={style.assetContainer}>
        <div className="flex justify-between pt-8 pb-5 px-5">
          <h1 className="flex text-[#9E2F92] font-semibold text-[20px] leading-[30px] font-poppins">
            Assets{" "}
          </h1>
          <h1 className="flex text-[#A22C90] text-[14px] leading-[21px] font-medium font-poppins">
            View all{" "}
            <span>
              <RiArrowDownSLine className="ml-3" />
            </span>
          </h1>
        </div>
        <div className="w-full mx-auto">
          <div className="bg-light-pink rounded-box flex justify-between p-[20px]">
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Wallet Type
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Amount
            </span>
            <span className="text-[#A8278C] text-[14px] leading-[21px] font-medium font-poppins px-[10px] ">
              Cost
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
          <div className="bg-white  flex justify-between p-4 ">
            <span className="text-[12px] leading-[18px] font-normal text-[#3a3737] font-poppins flex">
              {" "}
              <div className="mr-[12px]">
                <span>
                  <Image
                    src={metamask}
                    width="28"
                    height="27"
                    className="mr-4"
                    alt="metamask icon"
                  />
                </span>
              </div>
              Polkadot.js
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              20.36 TUR
            </span>
            <span className="text-[12px] leading-[18px] font-medium text-[#3a3737] font-poppins">
              $2,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
