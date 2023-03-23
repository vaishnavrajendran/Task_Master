import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { setUserTasks, updateUserTasks } from "../features/TaskSlice/taskSlice";

export const postTask =
  (heading, sub1, dynamicArray, token, startDate, endDate, userId) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };
      const {data} = await axios
        .post(
          "http://localhost:3001/task/upload",
          { heading, sub1, dynamicArray, startDate, endDate, userId },
          config
        )
        .catch((err) => console.log(err.message));
      dispatch(setUserTasks(data));
    } catch (error) {
      console.log(error.message);
    }
  };

export const getUserTasks = (userId,token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.get(`http://localhost:3001/task/get/${userId}`,config);
    dispatch(setUserTasks(data))
  } catch (error) {
    console.log(error.message);
  }
};

export const manageTask = (post,_id,token) => async(dispatch) => {
    try {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          };
          const { data } = await axios.patch(`http://localhost:3001/task/manage`,{post,_id},config)
          dispatch(updateUserTasks(data))
    } catch (error) {
        console.log(error.message);
    }
}