import express from "express"
import dotenv from "dotenv"

import connectDB from "./config/db.js"
import enrollmentsRoutes from "./routes/enrollmentsRoutes.js"
import studentsRoutes from "./routes/studentsRoutes.js"
import subjectsRoutes from "./routes/subjectsRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"

dotenv.config()

const app = express()
const PORT = 1998

app.use(express.json())

app.use("/enrollments", enrollmentsRoutes)
app.use("/students", studentsRoutes)
app.use("/subjects", subjectsRoutes)
app.use("/teachers", teacherRoutes)
app.use("teachers", teacherRoutes)

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