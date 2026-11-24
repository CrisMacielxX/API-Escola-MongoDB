import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

import enrollmentsRoutes from "./routes/enrollmentsRoutes.js"
import studentsRoutes from "./routes/studentsRoutes.js"
import subjectsRoutes from "./routes/subjectsRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const app = express()
const PORT = 1998

app.use(cors({
    origin: process.env.FRONTED_URL || "http://localhost:5173"
}))

app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Servidor rodando"
    })
})

app.use("/enrollments", enrollmentsRoutes)
app.use("/students", studentsRoutes)
app.use("/subjects", subjectsRoutes)
app.use("/teachers", teacherRoutes)
app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use((error, req, res, next) => {
    console.log(error.message)

    res.status(error.statusCode || 500).json({
        error: error.message
    })
})

const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log("Servidor rodando na porta: ", PORT)
        })
    } catch (error) {
        console.log("Erro ao iniciar o servidor: ", error.message)
    }
}

startServer()