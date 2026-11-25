import Students from "../models/Students.js"
import User from "../models/User.js"
import bcrypt from "bcryptjs"

const createStudents = async (data) => {
    const { nome, email, idade, matricula, password, telefone } = data

    if (!nome || !email || !password) {
        const error = new Error("Nome, password e email são obrigatorios")
        error.statusCode = 400
        throw error
    }
    const userExist = await User.findOne({ email })

    if (userExist) {
        const error = new Error("O email já foi utilizado")
        error.statusCode = 400
        throw error
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        nome,
        email,
        password: hashedPassword,
        role: "student",
        telefone,
        ativo: true
    })

    try {
        const student = await Students.create({
            userId: user._id,
            matricula,
            idade,
            ativo: true
        })

        return Students.findById(student._id)
            .populate("userId", "nome email telefone role")
    } catch (error) {
        await User.findByIdAndDelete(user._id)
        throw error
    }
}


const getStudents = async () => {
    return Students.find()
        .populate("userId", "nome email")
}

const getStudentsById = async (id) => {
    const students = await Students.findById(id)
        .populate("userId", "nome email")

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
        .populate("userId", "nome email")
}

const searchStudentsByName = async (name) => {
    const students = await Students.find({
        nome: { $regex: name, $options: "i" }
    })
        .populate("userId", "nome email")
    if (!students || students.length === 0) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return students
}


const countStudent = async () => {
    return Students.countDocuments()

}

const updateStudents = async (id, data) => {
    const students = await Students.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!students) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return students
}

const updateStudentsAvailability = async (id, ativo) => {
    const updateStudents = await Students.findByIdAndUpdate(
        id,
        { ativo: ativo },
        { new: true, runValidators: true }
    )
        .populate("userId", "nome email")

    if (!updateStudents) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return updateStudents
}


const deleteStudents = async (id) => {
    const students = await Students.findByIdAndDelete(id)

    if (!students) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return students
}


export default {
    createStudents,
    getStudents,
    getStudentsById,
    getStudentsActive,
    searchStudentsByName,
    countStudent,
    updateStudents,
    updateStudentsAvailability,
    deleteStudents
}