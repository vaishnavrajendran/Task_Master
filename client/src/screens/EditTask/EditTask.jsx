import React, { useEffect, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { useLocation } from "react-router-dom";
import { updateTask } from "../../actions/taskActions";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const EditTask = () => {
  const navigate = useNavigate();
  var counter = 2;
  function addInput() {
    var container = document.getElementById("input-container");
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add(
      "h-10",
      "border",
      "mt-1",
      "mb-2",
      "rounded",
      "px-4",
      "w-full",
      "bg-gray-50"
    );
    input.placeholder = "Sub Task " + counter;
    input.name = "sub" + counter;
    container.appendChild(input);
    counter++;
  }

  const currentDate = dayjs();
  const [startDate, setStartDate] = React.useState();
  const [endDate, setEndDate] = React.useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authData.userInfo.token);
  const userId = useSelector((state) => state.authData.userInfo.user._id);

  function getValuesFromInputFields() {
    const container = document.getElementById("inputFields");
    let containers = document.getElementById("input-container");
    const inputFields = container.querySelectorAll('input[type="text"]');
    const inputField2 = containers.querySelectorAll('input[type="text"]');
    const values = [];

    inputFields.forEach((input) => {
      values.push(input.value);
    });
    inputField2.forEach((input) => {
      values.push(input.value);
    });
    return values;
  }
  const { state } = useLocation();
  console.log(state);
  let i = 1;
  useEffect(() => {
    if (i === 1 && i !== 0) {
      let inputFieldsDiv = document.getElementById("inputFields");
      // loop through the elements array and create a new input field for each element
      for (let i = 0; i < state.pending.length; i++) {
        console.log(i);
        // create a new input field
        let inputField = document.createElement("input");
        inputField.type = "text";

        // set the value of the input field to the current element
        inputField.value = state.pending[i];
        inputField.classList.add(
          "h-10",
          "border",
          "mt-1",
          "mb-2",
          "rounded",
          "px-4",
          "w-full",
          "bg-gray-50"
        );

        // add the input field to the inputFields div
        inputFieldsDiv.appendChild(inputField);
      }
    }
    i++;
  }, []);

  const handleError = () => {
    toast.error("All fields should be filled");
  };

  const getData = () => {
    const dynamicTasks = getValuesFromInputFields();
    dispatch(
      updateTask(
        headingRef.current.value,
        dynamicTasks,
        token,
        startDate?.$d,
        endDate?.$d,
        state.taskId
      )
    );
  };

  const headingRef = useRef();
  return (
    <div>
      <Navbar />
      <div class="container max-w-screen-lg mx-auto mt-10">
        <div>
          <Toaster />
        </div>
        <div>
          <div class="lg:col-span-2">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div class="md:col-span-5">
                <label for="full_name">Task Heading</label>
                <input
                  ref={headingRef}
                  type="text"
                  name="heading"
                  id="heading"
                  class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div class="md:col-span-5" id="inputFields"></div>
              <div class="md:col-span-5" id="input-container"></div>
              <div class="mt-2 justify-center items-center flex w-full md:col-span-5">
                <AddIcon
                  onClick={() => {
                    addInput();
                  }}
                />
              </div>
              <div class="md:col-span-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker
                      label="Start Date"
                      format="DD-MM-YYYY"
                      defaultValue={dayjs(currentDate.format("YYYY-MM-DD"))}
                      value={startDate}
                      onChange={(newValue) => setStartDate(newValue)}
                    />
                    <DatePicker
                      label="Deadline"
                      value={endDate}
                      format="DD-MM-YYYY"
                      onChange={(newValue) => setEndDate(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div class="md:col-span-5 text-right">
                <div class="inline-flex items-end">
                  <button
                    onClick={() => {
                      if (
                        headingRef.current.value == "" ||
                        startDate == null ||
                        endDate == null
                      ) {
                        handleError();
                      } else {
                        getData();
                        navigate("/");
                      }
                    }}
                    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
