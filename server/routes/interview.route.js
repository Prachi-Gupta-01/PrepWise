import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { upload } from "../middlewares/multer.js";
import { analyzeResume } from "../controllers/interview.controller.js";

const interviewRouter = express.Router();

interviewRouter.post("/resume", isAuth, upload.single("resume"), analyzeResume);

interviewRouter.get("/get-interview", isAuth, getMyInterviews);
interviewRouter.get("/report/:id", isAuth, getInterviewReport);

export default interviewRouter;
