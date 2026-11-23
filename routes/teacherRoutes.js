import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"
import teacherController from "../controllers/teachersController.js"

const router = express.Router()

router.post("/", authMiddleware, adminMiddleware, teacherController.createTeacher)
router.get("/", authMiddleware, teacherController.getTeacher)
router.get("/:id", authMiddleware, teacherController.getTeacherById)
router.get("/activate/teacher", authMiddleware, adminMiddleware, teacherController.getTeacherActive)
router.get("/specialty/:specialty", authMiddleware, teacherController.getTeacherSpecialty)
router.get("/count/teacher", authMiddleware, teacherController.countTeacher)
router.put("/:id", authMiddleware, adminMiddleware, teacherController.updateTeacher)
router.patch("/:id", authMiddleware, adminMiddleware, teacherController.updateTeacherAvailability)
router.delete("/:id", authMiddleware, adminMiddleware, teacherController.deleteTeacher)


export default router