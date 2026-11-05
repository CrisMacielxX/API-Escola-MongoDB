import express from "express"
import studentsController from "../controllers/studentsController.js"

const router = express.Router()

router.post("/", studentsController.createStudents)
router.get("/", studentsController.getStudents)
router.get("/:id", studentsController.getStudentsById)

export default router