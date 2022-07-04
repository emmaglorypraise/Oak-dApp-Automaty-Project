import React from "react";
import { useSelector } from "react-redux";
import { RiArrowUpLine, RiArrowDownLine } from "react-icons/ri";
import Image from "next/image";
import Piechart from "../utils/Piechart";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
import usdt from "../assets/usdt.svg";
import WalletTransfer from "./Modal/WalletTransfer.jsx";

const ChartContainer = () => {
  const { balance } = useSelector((state) => state.connect);
  //   console.log(balance);
  return (
    <div className="flex w-full  px-[10px] md:pl-[40px] md:pr-[40px] font-poppins">
      <div className="w-full md:w-2/2 flex flex-col md:flex-row gap-[12px] bg-[#FFF2FC] rounded-lg shadow-container py-[20px] px-[30px] pt-[25px]">
        <div className="w-full md:w-1/2 md:border-r-[0.88px] md:border-r-[#C1C1C1] md:border-solid  md:border-b-[0] border-b-[0.88px] border-b-[#C1C1C1] border-solid">
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[#9E2F92] text-lg font-semibold ">Porfolio</h3>
            <span className="text-[#3A3737] text-xs font-medium">
              Total balance
            </span>
            <span className="text-[#676565] font-semibold text-2xl">
              TUR {balance}
            </span>
          </div>
          <div className="flex pt-[70px] pb-[0px] mb:pb-[36px]">
            <div className="w-1/2  py-[16px]  border-r-[0.88px] left-0 border-r-[#C1C1C1] border-solid flex flex-col ">
              <div className="flex">
                <RiArrowUpLine
                  color="#1E9940"
                  fill="#1E9940"
                  stroke="#1E9940"
                />
                <span className="text-[#3A373799] font-medium text-xs">
                  Income
                </span>
              </div>
              <span className="pt-[6px] text-[#676565] font-semibold text-sm">
                USD 50,345.28
              </span>
            </div>
            <div className="w-1/2 py-[16px] pl-[16px] md:pl-[86px] flex flex-col">
              <div className="flex">
                <RiArrowDownLine
                  color="#F33030"
                  fill="#F33030"
                  stroke="#F33030"
                />
                <span className="text-[#3A373799] font-medium text-xs">
                  Expenses
                </span>
              </div>
              <span className="pt-[6px] text-[#676565] font-semibold text-sm">
                USD 50,345.28
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-[25px] md:mt-[0px] flex flex-col justify-start">
          <div className="flex flex-col lg:flex-row justify-start md:justify-between">
            <div className="flex flex-col justify-center w-full md:w-1/3 md:ml-[20px]">
              <h3 className="text-[#9E2F92] text-lg font-semibold  text-left">
                Wallet
              </h3>
              <div className="flex justify-start">
                <Piechart />
              </div>
            </div>

            <div className="flex flex-col justify-center w-full md:w-2/3">
              <span className="text-end font-poppins text-[10.5274px] leading-[16px]">
                3 currencies
              </span>
              <div className="bg-[#F4F1F1] rounded-lg mt-[7px] md:ml-[21px] w-full mb-[18px] mx-auto p-[20px] flex">
                <div className=" w-full">
                  <div className="flex md:gap-[80px]  justify-between mb-4 mr-auto w-full">
                    <div className="flex">
                      <div className="mr-[10px]">
                        <Image
                          src={bitcoin}
                          width="17.55"
                          height="17.55"
                          className="mb-[10px] mr-[10px]"
                          alt="bitcoin"
                        />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]">
                          BTC
                        </p>
                        <p className="font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]">
                          Bitcoin
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <RiArrowUpLine
                        color="#1E9940"
                        fill="#1E9940"
                        stroke="#1E9940"
                      />
                      <p className="font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]">
                        13.4%
                      </p>
                    </div>
                  </div>
                  <div className="flex md:gap-[80px] justify-between mb-4 mr-auto w-full">
                    <div className="flex">
                      <div className="mr-[10px]">
                        <Image
                          src={ethereum}
                          width="17.55"
                          height="17.55"
                          className="mb-[10px] mr-[10px]"
                          alt="ethereum"
                        />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]">
                          ETH
                        </p>
                        <p className="font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]">
                          Ethereum
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <RiArrowUpLine
                        color="#1E9940"
                        fill="#1E9940"
                        stroke="#1E9940"
                      />
                      <p className="font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]">
                        13.4%
                      </p>
                    </div>
                  </div>
                  <div className="flex md:gap-[80px] justify-between mb-4 mr-auto w-full">
                    <div className="flex">
                      <div className="mr-[10px]">
                        <Image
                          src={usdt}
                          width="17.55"
                          height="17.55"
                          className="mb-[10px] mr-[10px]"
                          alt="usdt"
                        />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-[14.036px] leading-[21px] text-[off-black]">
                          USDT
                        </p>
                        <p className="font-poppins font-normal text-[8.77285px] leading-[13px] text-[off-grey]">
                          Tether
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <RiArrowUpLine
                        color="#1E9940"
                        fill="#1E9940"
                        stroke="#1E9940"
                      />
                      <p className="font-poppins font-normal text-[10.5274px] leading-[16px] text-[#1E9940]">
                        13.4%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WalletTransfer />
        </div>
      </div>
    </div>
  );
};

export default ChartContainer;
