import React from "react";

const ProgressBar = ({t_length,comp_length}) => {
    let percentage = (comp_length/t_length)*100
  return (
    <div class="w-full mb-3">
      <div class="shadow w-full bg-gray-900">
        <div className={`shadow w-full bg-blue-600`}>
          <div
            className={`bg-blue text-xs leading-none py-1 text-center text-white `}
          >
            {percentage.toFixed(2)}% completed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
