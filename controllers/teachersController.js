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

const getTeacherById = async (req, res, next) => {
    try {
        const teacher = await teacherService.getTeacherById(req.params.id)

        res.status(200).json({
            message: "Professor encontrado com sucesso",
            data: teacher
        })

    } catch (error) {
        next(error)
    }
}

const getTeacherActive = async (req, res, next) => {
    try {
        const teachers = await teacherService.getTeacherActive()

        res.status(200).json({
            message: "Professores encontrados com sucesso",
            total: teachers.lenght,
            data: teachers
        })

    } catch (error) {
        next(error)
    }
}

const getTeacherSpecialty = async (req, res, next) => {
    try {
        const teacher = await teacherService.getTeacherSpecialty(req.params.specialty)

        res.status(200).json({
            message: "Professores encontrados com sucesso",
            data: teacher
        })

    } catch (error) {
        next (error)
    }
}

const countTeacher = async (req, res, next) => {
    try {
        const total = await teacherService.countTeacher()

        res.status(200).json({
            message: "Total de professores",
            total
        })

    } catch (error) {
        next (error)
    }
}

const updateTeacher = async (req, res, next) => {
    try {
        const teacherAtualizado = await teacherService.updateTeacher(
            req.params.id,
            req.body
        )
        
        res.status(200).json({
            message: "Professor atualizado",
            data: teacherAtualizado
        })

    } catch (error) {
        next (error)
    }
}

const updateTeacherAvailability = async(req, res, next) => {
    try {
        const ativo = req.body.ativo
        const updateTeacher = await teacherService.updateTeacherAvailability(
            req.params.id,
            ativo
        )

        res.status(200).json({
            message: "Professor atualizado com sucesso",
            data: updateTeacher
        })

    } catch (error) {
        next(error)
    }
}

const deleteTeacher = async (req, res, next) => {
    try {
        const teacher = await teacherService.deleteTeacher(req.params.id)

        res.status(200).json({
            message: "Professor deletado com sucesso",
            data: teacher
        })
    } catch (error) {
        next(error)
    }
}


export default {
    createTeacher,
    getTeacher,
    getTeacherById,
    getTeacherActive,
    getTeacherSpecialty,
    countTeacher,
    updateTeacher,
    updateTeacherAvailability,
    deleteTeacher
}