import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards";

const UserTasks = () => {
  const userTasks = useSelector((state) => state.taskData.userTasks);
  return (
    <div className="grid justify-items-center md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {
            userTasks?.map(
                ({
                    _id,
                    userId,
                    heading,
                    pending,
                    completed,
                    startDate,
                    endDate
                }) => (
                    <Cards
                    key={_id}
                    userId={userId}
                    taskId={_id}
                    heading={heading}
                    pending={pending}
                    completed={completed}
                    startDate={startDate}
                    endDate={endDate}
                    />
                )
            )
        }
    </div>
  );
};

export default UserTasks;
