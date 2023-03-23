import express from "express";
import { upload, getTask, manage, update, deleteTask } from "../controllers/task.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
/* GET */
router.get("/get/:userId", verifyToken, getTask)

/* POST */
router.post("/upload", verifyToken, upload);

/* UPDATE */
router.patch("/manage", verifyToken, manage)
router.patch("/update", verifyToken, update)
router.patch("/delete", verifyToken, deleteTask)

export default router;