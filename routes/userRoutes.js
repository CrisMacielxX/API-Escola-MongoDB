import express from "express"
import authMiddleware from "../middlewares/authMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js"
import userController from "../controllers/userController.js"

const router = express.Router()

router.get("/me", authMiddleware, userController.getMe)
router.put("/me", authMiddleware, userController.updateMe)
router.get("/", authMiddleware, adminMiddleware, userController.getUsers)


export default router