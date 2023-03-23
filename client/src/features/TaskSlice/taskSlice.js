import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userTasks:null
};

export const authSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setUserTasks: (state,action) => {
        state.userTasks = action.payload
    },
    updateUserTasks: (state,action) => {
        const updatedTasks = state.userTasks.map(task => {
            if(task._id === action.payload._id){
                return action.payload;
            }
            return task;
        })
        state.userTasks = updatedTasks;
    }
  },
});

export const {
    setUserTasks,
    updateUserTasks
} = authSlice.actions;

export default authSlice.reducer;