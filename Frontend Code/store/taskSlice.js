import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiClient } from "./axiosClient";
import { formatSuccessResponse, formatErrorResponse } from "../utils/functions";

const limit = 10;

const initialState = {
  allTasks: [],
  loading: false,
  scheduleLoading: false,
  error: null,
};

export const fetchAllTask = createAsyncThunk(
  "task/getTasks",
  async (data, thunkAPI) => {
    // console.log(data);
    return await apiCall(
      `/task/get-tasks-for-address?address=${data?.address}`,
      "GET",
      {}
    );
  }
);

export const scheduleTasks = createAsyncThunk(
  "task/scheduleTasks",
  async (data, thunkAPI) => {
    return await apiCall(`/task/schedule-task`, "POST", data);
  }
);

const apiCall = async (url, method, body) => {
  // console.log(1);
  if (method === "GET") {
    try {
      const response = await ApiClient.get(url);
      formatSuccessResponse(response);
      return response;
    } catch (error) {
      return formatErrorResponse(error);
    }
  } else {
    try {
      const response = await ApiClient.post(url, {
        ...body,
      });
      // console.log(response);
      return formatSuccessResponse(response.data);
    } catch (error) {
      return formatErrorResponse(error);
    }
  }
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setLoader: (state, actions) => {
      state.loading = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTask.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllTask.fulfilled, (state, action) => {
      state.loading = false;
      state.allTasks = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(fetchAllTask.rejected, (state, action) => {
      state.loading = false;
      state.error = "An error occurred";
    });
    builder.addCase(scheduleTasks.fulfilled, (state, action) => {
      state.scheduleLoading = false;
    });
    builder.addCase(scheduleTasks.rejected, (state, action) => {
      state.scheduleLoading = false;
      state.error = "An error occurred";
    });
  },
});

export const { setLoader } = taskSlice.actions;

export default taskSlice.reducer;
