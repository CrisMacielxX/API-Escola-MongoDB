import express from "express"
import teacherController from "../controllers/teachersController.js"

const router = express.Router()

router.post("/", teacherController.createTeacher)
router.get("/", teacherController.getTeacher)
router.get("/:id", teacherController.getTeacherById)
router.get("/activate/teacher", teacherController.getTeacherActive)
router.get("/specialty/:specialty", teacherController.getTeacherSpecialty)
router.get("/count/teacher", teacherController.countTeacher)
router.put("/:id", teacherController.updateTeacher)
router.patch("/:id", teacherController.updateTeacherAvailability)
router.delete("/:id", teacherController.deleteTeacher)


export default router