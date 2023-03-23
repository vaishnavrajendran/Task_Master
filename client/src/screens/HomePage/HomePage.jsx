import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTasks from "../../components/UserTasks"
import Navbar from "../../components/Navbar";
import { getUserTasks } from "../../actions/taskActions";

const HomePage = () => {
    const userId = useSelector(state => state.authData.userInfo.user._id)
    const token = useSelector(state => state.authData.userInfo.token)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserTasks(userId,token))
    },[])
  return (
    <div>
        <Navbar/>
        <UserTasks/>
    </div>
  );
};

export default HomePage;
