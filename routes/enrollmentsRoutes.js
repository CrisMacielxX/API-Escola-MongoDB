import express from "express";
import enrollmentsController from "../controllers/enrollmentsController.js";

const router = express.Router();

router.post("/", enrollmentsController.createEnrollments)
router.get("/enrollments/active", enrollmentsController.getAllEnrollments)
router.get("/:id", enrollmentsController.getEnrollmentsById)
router.get("/students/:id", enrollmentsController.getStudentsEnrollments)
router.get("/subjects/:id", enrollmentsController.getSubjectEnrollments)
router.get("/active/enrollments/:status", enrollmentsController.getEnrollmentsActive)
router.get("/count/enrollments", enrollmentsController.countEnrollments)
router.patch("/:id/note", enrollmentsController.updateEnrollmentsNote)
router.patch("/:id/status", enrollmentsController.updateEnrollmentsStatus)
router.delete("/:id", enrollmentsController.deleteEnrollments)

export default router;