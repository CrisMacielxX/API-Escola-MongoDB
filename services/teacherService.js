import teachersController from "../controllers/teachersController.js"
import Teacher from "../models/Teachers.js"

const createTeacher = async (data) => {
    const { nome, email, especialidade, telefone } = data

    if (!nome || !email) {
        const error = new Error("Nome e email são obrigatorios")
        error.statusCode = 400
        throw error
    }

    const teacherExist = await Teacher.findOne({ email })

    if (teacherExist) {
        const error = new Error("email já utilizado")
        error.statusCode = 400
        throw error
    }

    const teacher = await Teacher.create({
        nome,
        email,
        especialidade,
        telefone
    })

    return {
        _id: teacher._id,
        nome: teacher.nome,
        email: teacher.email,
        especialidade: teacher.especialidade,
        telefone: teacher.telefone,
        createAt: teacher.createdAt,
        updateAt: teacher.updatedAt
    }
}

const getTeacher = async () => {
    return Teacher.find()
}

const getTeacherById = async (id) => {
    const teacher = await Teacher.findById(id)

    if(!teacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const getTeacherActive = async () => {
    return Teacher.find({
        ativo: true
    })
}

const getTeacherSpecialty = async (especialidade) => {
    const teacher = await Teacher.find({especialidade})

    if (!teacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const countTeacher = async () => {
    return Teacher.countDocuments()
}

const updateTeacher = async (id, data) => {
    const teacher = await Teacher.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if(!teacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
} 

const updateTeacherAvailability = async (id, ativo) => {
    const updateTeacher = await Teacher.findByIdAndUpdate(
        id,
        { ativo : ativo },
        { new: true, runValidators: true}
    )

    if(!updateTeacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return updateTeacher
}

const deleteTeacher = async (id) => {
    const teacher = await Teacher.findByIdAndDelete(id)

    if (!teacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
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