import express from "express"
import subjectsController from "../controllers/subjectsController.js"

const router = express.Router()

router.post("/", subjectsController.createSubjects)

export default router