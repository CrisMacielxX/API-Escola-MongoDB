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

export default {
    createSubjects,
}