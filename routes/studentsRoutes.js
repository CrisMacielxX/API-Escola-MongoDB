import express from "express"
import studentsController from "../controllers/studentsController.js"

const router = express.Router()

router.post("/", studentsController.createStudents)
router.get("/", studentsController.getStudents)
router.get("/:id", studentsController.getStudentsById)
router.get("/active/students", studentsController.getStudentsActive)
router.get("/search/:name", studentsController.searchStudentsByName)
router.get("/count/students", studentsController.countStudents)

export default router