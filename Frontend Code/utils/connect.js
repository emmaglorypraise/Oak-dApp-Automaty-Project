import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  connectPolkadot,
  disConnectPolkadot,
  setAddress,
  setBalance,
} from "../store/connectSlice";
const { ApiPromise, WsProvider } = require("@polkadot/api");
import { toast } from "react-toastify";

export default function useConnect() {
  const { connected, address } = useSelector((state) => state.connect);
  const dispatch = useDispatch();

  const wsProvider = new WsProvider(
    "wss://rpc.turing-staging.oak.tech/public-ws"
  );

  // const api = ApiPromise.create({ provider: wsProvider });

  // connecting to the extension
  async function connect() {
    const polkadot = await import("@polkadot/extension-dapp");
    const extensions = await polkadot.web3Enable("Oak Automation dApp");

    if (
      extensions &&
      extensions.length === 0 &&
      extensions[0]?.name !== "polkadot-js"
    ) {
      toast.error("Please enable the Polkadot extension");
      return;
    } else {
      await dispatch(connectPolkadot());
      toast.success("Connected to the Polkadot extension");
    }

    const allAccounts = await polkadot.web3Accounts();
    if (allAccounts.length === 0) {
      toast.error("Please add an account to your browser");
      return;
    } else {
      const address = await allAccounts[0]?.address;
      // console.log(address);
      await dispatch(setAddress(address));
      // console.log(1);
      // const api = await ApiPromise.create();
      const api = await ApiPromise.create({ provider: wsProvider });
      let {
        data: { free: previousFree },
        nonce: previousNonce,
      } = await api.query.system.account(address);
      // console.log()
      await dispatch(setBalance(`${previousFree}`));
      // console.log(
      //   `${address} has a balance of ${previousFree}, nonce ${previousNonce}`
      // );
    }
  }

  return {
    connect,
  };
}
