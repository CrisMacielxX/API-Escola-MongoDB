import studentsService from "../services/studentsService.js"

const createStudents = async (req, res, next) => {
    try {
        const students = await studentsService.createStudents (req.body)

        res.status(201).json({
            message: "Estudante criado com sucesso",
            data: students,
        })

    } catch (error) {
        next (error)
    }
}

const getStudents = async (req, res, next) => {
    try {
        const students = await studentsService.getStudents()

        res.status(200).json({
            message: "Estudantes encontrado com sucesso",
            total: students.lenght,
            data: students
        })

    } catch (error) {
        next (error)
    }
}

const getStudentsById = async (req, res, next) => {
    try {
        const students = await studentsService.getStudentsById(req.params.id)

        res.status(200).json ({
            message: "Estudante encontrado com sucesso",
            data: students
        })

    } catch (error) {
        next (error)
    }
}


export default {
    createStudents,
    getStudents,
    getStudentsById,
}