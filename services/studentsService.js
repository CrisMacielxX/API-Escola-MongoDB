import Students from "../models/Students.js"

const createStudents = async (data) => {
    const { nome, email, idade, matricula } = data

    if (!nome || !email) {
        const error = new Error("Nome e email são obrigatorios")
        error.statusCode = 400
        throw error
    }

    const studentsExist = await Students.findOne({ email })

    if (studentsExist) {
        const error = new Error("email já utilizado")
        error.statusCode = 400
        throw error
    }

    const students = await Students.create({
        nome,
        email,
        idade,
        matricula
    })

    return {
        _id: students._id,
        nome: students.nome,
        email: students.email,
        idade: students.idade,
        matricula: students.matricula,
        createAt: students.createdAt,
        updateAt: students.updatedAt
    }
}

const getStudents = async () => {
    return Students.find()
}

const getStudentsById = async (id) => {
    const students = await Students.findById(id);

    if (!students) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return students
}

const getStudentsActive = async () => {
    return Students.find({
        ativo: true,
    })
}

const searchStudentsByName = async (name) => {
    const students = await Students.find({
        nome: { $regex: name, $options: "i" }
    })

    return students
}

const countStudent = async () => {
    return Students.countDocuments()

}
export default {
    createStudents,
    getStudents,
    getStudentsById,
    getStudentsActive,
    searchStudentsByName,
    countStudent,
}