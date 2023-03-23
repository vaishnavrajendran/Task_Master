import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/userSlice/authSlice";
import taskReducer from "../features/TaskSlice/taskSlice";

const store = configureStore({
    reducer: {
        authData : authReducer,
        taskData : taskReducer
    }
})

export default store;