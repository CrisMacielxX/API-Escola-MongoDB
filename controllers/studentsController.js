import studentsService from "../services/studentsService.js"

const createStudents = async (req, res, next) => {
    try {
        const students = await studentsService.createStudents(req.body)

        res.status(201).json({
            message: "Estudante criado com sucesso",
            data: students,
        })

    } catch (error) {
        next(error)
        next(error)
    }
}

const getStudents = async (req, res, next) => {
    try {
        const students = await studentsService.getStudents()

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            total: students.lenght,
            data: students
        })

    } catch (error) {
        next(error)
    }
}

const getStudentsById = async (req, res, next) => {
    try {
        const students = await studentsService.getStudentsById(req.params.id)

        res.status(200).json({
            message: "Estudante encontrado com sucesso",
            data: students
        })

    } catch (error) {
        next(error)
    }
}

const getStudentsActive = async (req, res, next) => {
    try {
        const students = await studentsService.getStudentsActive()

        res.status(200).json({
            message: "Estudantes disponiveis encontrado",
            total: students.length,
            data: students
        })

    } catch (error) {
        next(error)
    }
}

const searchStudentsByName = async (req, res, next) => {
    try {
        const students = await studentsService.searchStudentsByName(req.params.name)

        res.status(200).json({
            message: "Estudantes encontrados",
            total: students.lenght,
            data: students
        })

    } catch (error) {
        next(error)
    }
}

const countStudents = async (req, res, next) => {
    try {
        const total = await studentsService.countStudent()

        res.status(200).json({
            message: "Quantidade de estudantes encontrados",
            total
        })

    } catch (error) {
        next(error)
    }
}

const updateStudents = async (req, res, next) => {
    try {
        const studentsAtualizado = await studentsService.updateStudents(
            req.params.id,
            req.body
        )

        res.status(200).json({
            message: "Estudante encontrado",
            data: studentsAtualizado
        })

    } catch (error) {
        next(error)
    }
}

const updateStudentsAvailability = async (req, res, next) => {
    try {
        const { ativo } = req.body
        const updatedStudent = await studentsService.updateStudentsAvailability(req.params.id, req.body)

        res.status(200).json({
            message: "Estudante atualizado com sucesso",
            data: updatedStudent
        })

    } catch (error) {
        next(error)
    }
}

const deleteStudents = async (req, res, next) => {
    try {
        const students = await studentsService.deleteStudents(req.params.id)

        res.status(200).json({
            message: "Estudante deletado com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}

export default {
    createStudents,
    getStudents,
    getStudentsById,
    getStudentsActive,
    searchStudentsByName,
    countStudents,
    updateStudents,
    updateStudentsAvailability,
    deleteStudents
}