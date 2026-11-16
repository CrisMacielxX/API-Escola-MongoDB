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

const getSubjectsActive = async (req, res, next) => {
    try {
        const subjects = await subjectsService.getSubjectsActive()

        res.status(200).json({
            message: "Diciplinas disponiveis encontrado",
            total: subjects.length,
            data: subjects
        })

    } catch (error) {
        next(error)
    }
}

const getSubjectHours = async (req, res, next) => {
    try {
        const hours = await subjectsService.getSubjectHours(req.params.min, req.params.max)

        res.status(200).json({
            message: "Diciplinas encontradas",
            data: hours
            
        })

    } catch (error) {
        next (error)
    }
}

const updateSubjects = async (req, res, next) => {
        try {
        const diciplinaAtualizada = await subjectsService.updateSubjects(
            req.params.id,
            req.body
        )

        res.status(200).json({
            message: "Diciplina atualizada",
            data: diciplinaAtualizada
        })

    } catch (error) {
        next(error)
    }

}

const updateSubjectsAvailability = async (req, res, next) => {
    try {
        const updateSubjects = await subjectsService.updateSubjectsAvailability(
            req.params.id,
            req.body.ativa
        );

        res.status(200).json({
            message: "Disciplina atualizada com sucesso",
            data: updateSubjects
        });
    } catch (error) {
        next(error);
    }
};

const deleteSubjects = async (req, res, next) => {
    try {
        const subjects = await subjectsService.deleteSubjects(req.params.id)

        res.status(200).json ({
            message: "Diciplina deletada com sucesso",
            data: subjects
        })
    } catch (error) {
        next(error)
    }
}


export default {
    createSubjects,
    getAllSubjects,
    getSubjectsById,
    getSubjectsByTeacher,
    getSubjectsActive,
    getSubjectHours,
    updateSubjects,
    updateSubjectsAvailability,
    deleteSubjects
}