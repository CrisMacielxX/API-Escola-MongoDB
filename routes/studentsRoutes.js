import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"
import studentsController from "../controllers/studentsController.js"

const router = express.Router()

router.post("/", authMiddleware, studentsController.createStudents)
router.get("/", authMiddleware, studentsController.getStudents)
router.get("/:id", authMiddleware, studentsController.getStudentsById)
router.get("/active/students", authMiddleware, adminMiddleware, studentsController.getStudentsActive)
router.get("/search/:name", authMiddleware, adminMiddleware, studentsController.searchStudentsByName)
router.get("/count/students", authMiddleware, adminMiddleware, studentsController.countStudents)
router.put("/:id", authMiddleware, adminMiddleware, studentsController.updateStudents)
router.patch("/:id", authMiddleware, adminMiddleware, studentsController.updateStudentsAvailability)
router.delete("/:id", authMiddleware, adminMiddleware, studentsController.deleteStudents)

export default router