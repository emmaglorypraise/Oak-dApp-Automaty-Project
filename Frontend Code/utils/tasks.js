import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTask, scheduleTasks, setLoader } from "../store/taskSlice";
import { Observer, Scheduler, oakConstants, Recurrer } from "oak-js-library";
const { ApiPromise, WsProvider } = require("@polkadot/api");
import { toast } from "react-toastify";
const uuid = require("uuid");
import { dateConvert } from "../utils/helper";

export default function useTask() {
  const { allTasks } = useSelector((state) => state.task);
  const { address } = useSelector((state) => state.connect);
  const dispatch = useDispatch();

  // connecting to the extension
  async function getAllTask() {
    // console.log(1);
    await dispatch(fetchAllTask({ address }));
    // console.log(api.genesisHash.toHex());

    // const observer = new Observer(oakConstants.OakChains.TUR);
    // const taskQueueTaskHashes = await observer.getAutomationTimeTaskQueue();
    // console.log("taskQueueTaskHashes", taskQueueTaskHashes);
    // console.log("alltask state:", allTasks);
  }

  async function scheduleTask(message, timeSlot) {
    const polkadot = await import("@polkadot/extension-dapp");

    const injector = await polkadot.web3FromAddress(address);

    const scheduler = new Scheduler(oakConstants.OakChains.TUR);

    const recurrer = new Recurrer();

    const recurrences = 1;

    const timestamps = recurrer.getHourlyRecurringTimestamps(
      new Date(timeSlot),
      recurrences
    );
    // console.log("timesatamps", timestamps);

    // Recommended to save this providedID to retreive task in the future
    const providedID = uuid.v4();

    const hex = await scheduler.buildScheduleNotifyExtrinsic(
      address,
      providedID,
      timestamps,
      message,
      injector.signer
    );
    const txHash = await scheduler.sendExtrinsic(hex);
    // console.log("txHash", txHash);
    return { hex, providedID };
  }

  async function transferTask(timeSlot, amount, receiverAddress) {
    const polkadot = await import("@polkadot/extension-dapp");

    const injector = await polkadot.web3FromAddress(address);

    const scheduler = new Scheduler(oakConstants.OakChains.TUR);

    const recurrer = new Recurrer();

    const recurrences = 1;

    const timestamps = recurrer.getHourlyRecurringTimestamps(
      new Date(timeSlot),
      recurrences
    );

    const providedID = uuid.v4();

    const hex = await scheduler.buildScheduleNativeTransferExtrinsic(
      address,
      providedID,
      timestamps,
      amount,
      receiverAddress,
      injector.signer
    );
    // console.log(hex);
    return hex;
  }

  async function createAutomationTask(
    receiverAddress,
    message,
    date,
    amount = 0
  ) {
    try {
      var DateSeconds = (await new Date(date).getTime()) / 1000;
      const scheduleResult = await scheduleTask(message, DateSeconds);
      if (!scheduleResult) return;
      await dispatch(
        scheduleTasks({
          address,
          message,
          timeSlot: dateConvert(date),
          amount,
          hex: scheduleResult.hex,
          providedId: scheduleResult.providedID,
        })
      );
      toast.success("Task scheduled successfully");
    } catch {
      toast.error("Error scheduling task");
    }
  }

  async function transfer(receiverAddress, date, amount) {
    try {
      await dispatch(setLoader(true));
      var DateSeconds = (await new Date(date).getTime()) / 1000;
      const transferResult = await transferTask(
        DateSeconds,
        amount,
        receiverAddress
      );
      if (!scheduleResult) return;
      toast.success("Transfer Successful");
      await dispatch(setLoader(false));
    } catch {
      toast.error("Error Transferring");
    }
  }

  return {
    getAllTask,
    createAutomationTask,
    transfer,
  };
}
