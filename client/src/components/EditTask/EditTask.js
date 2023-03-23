import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { postTask } from "../../actions/taskActions";

export default function AlertDialog(color,pending,completed) {
  console.log("pending",pending);
  const concatenatedArray = [...pending,...completed];
  const [open, setOpen] = React.useState(false);
  const [opened, setOpened] = React.useState(false)

  const handleClickOpen = () => {
    setOpened(true)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
  const token = useSelector(state => state.authData.userInfo.token)
  const userId = useSelector(state => state.authData.userInfo.user._id)

  const headingRef = React.useRef();
  const subOneRef = React.useRef();

  function getValuesFromInputFields() {
    const container = document.getElementById('input-container');
    const inputFields = container.querySelectorAll('input[type="text"]');
    const values = [];
  
    inputFields.forEach((input) => {
      values.push(input.value);
    });
    return values;
  }

  const getData = () => {
    const dynamicTasks = getValuesFromInputFields();
    dispatch(postTask(headingRef.current.value,subOneRef.current.value,dynamicTasks,token,startDate?.$d,endDate?.$d,userId));
  }

   function load () {
    const length = pending.length+completed.length;
    var containers = document.getElementById("automatic");
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
    for (let i = 1; i < length; i++) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("value", concatenatedArray[i]);
      console.log("input",input);
      containers.appendChild(input);
    containers.appendChild(input);
    }
  }

  return (
    <div>
      <Button variant="text" sx={{ color: color }} onClick={handleClickOpen}>
        New Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Task Master</DialogTitle>
        <DialogContent>
          <div class="container max-w-screen-lg mx-auto">
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
                  <div class="md:col-span-5">
                    <label for="email">Sub Task 1</label>
                    <input
                    ref={subOneRef}
                      type="text"
                      name="sub1"
                      id="sub 1"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="Type sub task here"
                    />
                  </div>
                  <div id="automatic"></div>
                  <div class="md:col-span-5" id="input-container"></div>
                  <div class="mt-2 justify-center items-center flex w-full md:col-span-5">
                    <AddIcon onClick={()=> {
                      addInput()
                      load()
                    }} />
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
                          getData()
                          handleClose()
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
