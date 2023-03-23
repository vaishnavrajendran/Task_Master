import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manageTask } from "../../actions/taskActions";

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
  const handleChecked = (post) => {
    dispatch(manageTask(post, taskId, token));
  };
  return (
    <div class="grid grid-cols-1 justify-center items-center mt-16 ">
      <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
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
          <button class="flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="h-6 w-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            </svg>
          </button>
        </div>
        {/* 
        <div class="h-full w-full">
          <div class="mt-5 flex items-center justify-between p-2">
            <div class="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                name="weekly"
              />
              <p class="text-base font-bold text-navy-700 dark:text-white">
                Landing Page Design
              </p>
            </div>
            <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
              drag_indicator
            </span>
          </div>

          <div class="mt-2 flex items-center justify-between p-2">
            <div class="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                name="weekly"
                checked
              />
              <p class="text-base font-bold text-navy-700 dark:text-white">
                Mobile App Design
              </p>
            </div>
            <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
              drag_indicator
            </span>
          </div>

          <div class="mt-2 flex items-center justify-between p-2">
            <div class="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                name="weekly"
                checked
              />
              <p class="text-base font-bold text-navy-700 dark:text-white">
                Dashboard Builder
              </p>
            </div>
            <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
              drag_indicator
            </span>
          </div> */}

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
                  checked
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

        {/* <div class="mt-2 flex items-center justify-between p-2">
            <div class="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                class="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center 
                justify-center rounded-md border border-gray-300 text-white/0 outline-none transition duration-[0.2s]
                checked:border-none checked:text-white hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400"
                name="weekly"
              />
              <p class="text-base font-bold text-navy-700 dark:text-white">
                Dashboard Builder
              </p>
            </div>
            <span class="material-symbols-rounded h-6 w-6 text-navy-700 dark:text-white cursor-pointer">
              drag_indicator
            </span>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default Cards;
