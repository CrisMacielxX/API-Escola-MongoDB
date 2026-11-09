import teacherService from "../services/teacherService.js"

const createTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.createTeacher(req.body)

        res.status(201).json({
            message: "Professor criado com sucesso",
            data: teacher,
        })

    } catch (error) {
        next(error)
        next(error)
    }
}

const getTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.getTeacher()

        res.status(200).json({
            message: "Professores encontrados com sucesso",
            total: teacher.lenght,
            data: teacher
        })

    } catch (error) {
        next(error)
    }
}

export default {
    createTeacher,
    getTeacher,
}