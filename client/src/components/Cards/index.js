import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageTask, deleteTasks } from "../../actions/taskActions";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

const Cards = ({
  _id,
  userId,
  heading,
  pending,
  completed,
  taskId,
  startDate,
  endDate,
}) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const token = useSelector((state) => state.authData.userInfo.token);
  const userIds = useSelector(state => state.authData.userInfo.user._id)
  const handleChecked = (post) => {
    dispatch(manageTask(post, taskId, token));
  };
  const deleteTask = (_id) => {
    dispatch(deleteTasks(_id, userIds, token));
  };
  const length = pending.length;
  const t_length = pending.length + completed.length;
  const comp_length = completed.length;
  const navigate = useNavigate();
  const date = new Date(endDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formattedDate = `${day}-${month}-${year}`;
  return (
    <>
      <div class="grid grid-cols-1 justify-center items-center mt-16 ">
        <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
          <ProgressBar t_length={t_length} comp_length={comp_length} />
          <div class="relative flex flex-row justify-between">
            <div class="flex items-center">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
                {pending.length === 0 ? (
                  <span class="material-symbols-rounded h-6 w-6 text-brand-500 dark:text-white">
                    check_circle
                  </span>
                ) : null}
              </div>
              <h4 class="ml-4 text-xl font-bold text-navy-700 dark:text-white">
                {heading}
              </h4>
            </div>
            <div class="flex items-center hover:cursor-pointer text-sm p-2 text-brand-500 rounded-lg text-g">
              <ModeEditIcon
                onClick={() => {
                  navigate("/edit-task", {
                    state: {
                      pending,
                      length,
                      taskId,
                    },
                  });
                }}
              />
              <DeleteIcon onClick={() => deleteTask(taskId)} />
            </div>
          </div>

          {pending.map((post) => {
            return (
              <div class="mt-2 flex items-center justify-between p-2">
                <div class="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                          justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                    name="weekly"
                    checked={false}
                    onClick={() => handleChecked(post, _id)}
                  />
                  <p class="text-base font-bold text-navy-700 dark:text-white ">
                    {post}
                  </p>
                </div>
                <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                  drag_indicator
                </span>
              </div>
            );
          })}

          <h4 class="flex items-center mt-2 text-xl font-bold text-navy-700 dark:text-white">
            Completed Tasks
          </h4>

          {completed?.map((post) => {
            return (
              <div class="mt-2 flex items-center justify-between p-2">
                <div class="flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                          justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                          checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                    name="weekly"
                    defaultChecked
                    onClick={() => handleChecked(post, _id)}
                  />
                  <p class="text-base font-bold text-navy-700 text-gray-500">
                    {post}
                  </p>
                </div>
                <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
                  drag_indicator
                </span>
              </div>
            );
          })}
          <h4 class="flex items-center mt-2 text-xl font-bold text-red-500">
            DeadLine : {formattedDate === NaN ? "Not Selected" : formattedDate}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Cards;
