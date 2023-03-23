import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userId:{
        type:mongoose.Types.ObjectId
    },
    heading: {
        type:String
    },
    pending: {
        type:Array
    },
    completed: {
        type: Array,
        default:[]
    },
    startDate:{
        type:Date
    },
    endDate: {
        type:Date
    } 
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
