import express from "express"
import subjectsController from "../controllers/subjectsController.js"

const router = express.Router()

router.post("/", subjectsController.createSubjects)
router.get("/", subjectsController.getAllSubjects)
router.get("/:id", subjectsController.getSubjectsById)
router.get("/teacher/:id", subjectsController.getSubjectsByTeacher)
router.get("/active/subjects", subjectsController.getSubjectsActive)

export default router