import express from "express"
import subjectsController from "../controllers/subjectsController.js"

const router = express.Router()

router.post("/", subjectsController.createSubjects)
router.get("/", subjectsController.getAllSubjects)
router.get("/:id", subjectsController.getSubjectsById)
router.get("/teacher/:id", subjectsController.getSubjectsByTeacher)
router.get("/active/subjects", subjectsController.getSubjectsActive)
router.get("/hours/:min/:max", subjectsController.getSubjectHours)
router.put("/:id", subjectsController.updateSubjects)
router.patch("/availability/:id", subjectsController.updateSubjectsAvailability)
router.delete("/:id", subjectsController.deleteSubjects)


export default router