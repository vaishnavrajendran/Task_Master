import express from "express";
import { upload, getTask, manage } from "../controllers/task.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
/* GET */
router.get("/get/:userId", verifyToken, getTask)

/* POST */
router.post("/upload", verifyToken, upload);

/* UPDATE */
router.patch("/manage", verifyToken, manage)


export default router;