import express from "express"
import teacherController from "../controllers/teachersController.js"

const router = express.Router()

router.post("/", teacherController.createTeacher)
router.get("/", teacherController.getTeacher)


export default router