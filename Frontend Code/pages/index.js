import React, { useEffect } from "react";
import ChartContainer from "../components/ChartContainer";
import TaskContainer from "../components/TaskContainer";
import Navbar from "../components/Navbar";
import useConnect from "../utils/connect";
import useTask from "../utils/tasks";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/loader";

const Home = () => {
  const { connect } = useConnect();
  const { getAllTask } = useTask();
  const { address } = useSelector((state) => state.connect);
  const { loading } = useSelector((state) => state.task);
  // console.log(loading);

  useEffect(() => {
    (async () => {
      await connect();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getAllTask();
    })();
  }, [address]);

  return (
    <div className="App">
      <div className="relative w-full h-full">
        <Navbar />
        <ChartContainer />
        <TaskContainer />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Home;
