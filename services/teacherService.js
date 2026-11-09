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

export default {
    createTeacher,
    getTeacher,
}