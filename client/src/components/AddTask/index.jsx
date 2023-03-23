import React from "react";

const AddTask = () => {
  return (
    <div>
      <div class="container flex justify-center mx-auto">
        <button
          class="px-6 py-2 text-white bg-blue-600 rounded shadow-xl"
          type="button"
        >
          open model
        </button>
        <div class="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div class="max-w-2xl p-6 bg-white">
            <div class="flex items-center justify-between">
              <h3 class="text-2xl">Model Title</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="mt-4">
              <form action="">
                <div class="mb-5">
                  <label for="name" class="block font-bold text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="w-full p-2 border border-gray-300 rounded-l shadow focus:outline-none focus:ring-2 focus:ring-purple-600"
                    placeholder="Enter you name"
                  />
                </div>
                <div class="mb-5">
                  <label for="email" class="block font-bold text-gray-600">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    class="w-full p-2 border border-gray-300 rounded-l shadow"
                    placeholder="Enter you Email"
                  />
                  <p class="mt-1 text-sm text-red-400">
                    Email field is required!
                  </p>
                </div>
                <button
                  type="submit"
                  class="block w-full p-3 font-bold text-white bg-blue-500 rounded-l"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
