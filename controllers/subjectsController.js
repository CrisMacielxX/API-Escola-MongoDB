import subjectsService from "../services/subjectsService.js"

const createSubjects = async (req, res, next) => {
    try {
        const subjects = await subjectsService.createSubjects(req.body)

        res.status(201).json({
            message: "Diciplina criada com sucesso",
            data: subjects,
        })

    } catch (error) {
        next(error)
        next(error)
    }
}

const getAllSubjects = async (req, res, next) => {
    try {
        const subjects = await subjectsService.getAllSubjects()

        res.status(200).json({
            message: "Diciplinas encontradas com sucesso",
            data: subjects
        })

    } catch (error) {
        next (error)
    }
}

const getSubjectsById = async (req, res, next) => {
    try {
        const subjects = await subjectsService.getSubjectsById(req.params.id)

        res.status(200).json({
            message: "Diciplina encontrada com sucesso",
            data: subjects
        })

    } catch (error) {
        next (error)
    }
}

const getSubjectsByTeacher = async (req, res, next) => {
    try {
        const subjects = await subjectsService.getSubjectsByTeacher(req.params.id)

        res.status(200).json({
            message: "Diciplinas do professor encontradas",
            data: subjects
        })

    } catch (error) {
        next (error)
    }
}

export default {
    createSubjects,
    getAllSubjects,
    getSubjectsById,
    getSubjectsByTeacher,
}