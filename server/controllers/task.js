import Task from "../models/Task.js";

export const upload = async (req, res) => {
  try {
    const { heading, sub1, dynamicArray, startDate, endDate, userId } =
      req.body;
    dynamicArray.unshift(sub1);
    const newTask = new Task({
      userId: userId,
      heading,
      pending: dynamicArray,
      startDate,
      endDate,
    });
    const savedTask = newTask.save();
    const getUserTask = await Task.find({ userId: userId });
    res.status(201).json(getUserTask);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTask = async (req, res) => {
  try {
    const { userId } = req.params;
    const getUserTask = await Task.find({ userId: userId });
    res.status(201).json(getUserTask);
  } catch (error) {
    console.log(error.message);
  }
};

export const manage = async (req, res) => {
  try {
    const { _id, post} = req.body;
    const findTask = await Task.findById(_id)
    if(findTask.pending.includes(post)){
        findTask.completed.push(post);
        const index = findTask.pending.findIndex(element => element === post)
        findTask.pending.splice(index, 1);
        await findTask.save();
    } else {
        findTask.pending.push(post);
        const index = findTask.completed.findIndex(element => element === post)
        findTask.completed.splice(index, 1);
        await findTask.save();
    }
    res.status(201).json(findTask);
  } catch (error) {
    console.log(error.message);
  }
};

export const update = async (req, res) => {
  try {
    const { userId, heading, dynamicTasks, startDate, endDate } = req.body;
    const findTask = await Task.findById(userId);
    findTask.heading = heading;
    findTask.pending = dynamicTasks;
    findTask.startDate = startDate;
    findTask.endDate = endDate
    const savedTask = await findTask.save();
    res.status(201).json(savedTask); 
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { _id, userId } = req.body;
    const findTask = await Task.deleteOne({_id:_id});
    const getAll = await Task.find({userId:userId});
    res.status(201).json(getAll);
  } catch (error) {
    console.log(error.message);
  }
}
