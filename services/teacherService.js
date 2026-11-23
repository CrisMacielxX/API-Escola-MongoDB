import teachersController from "../controllers/teachersController.js"
import Teacher from "../models/Teachers.js"

const createTeacher = async (data) => {
    const { nome, email, password, especialidade, telefone } = data

    if (!nome || !email || !password) {
        const error = new Error("Nome, email e senha são obrigatorios")
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
        telefone,
        role: "teacher",
        ativo: true
    })

    try {
        const teacher = await Teacher.create({
            userId: user._id,
            especialidade,
            ativo: true
        })

        return Teacher.findById(teacher._id)
            .populate("userId", "nome email telefone role")
    } catch (error) {
        await User.findByIdAndDelete(user._id)
        throw error
    }
}

const getTeacher = async () => {
    return Teacher.find()
        .populate("userId", "nome email")
}

const getTeacherById = async (id) => {
    const teacher = await Teacher.findById(id)
        .populate("userId", "nome email")

    if (!teacher) {
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
        .populate("userId", "nome email")
}

const getTeacherSpecialty = async (especialidade) => {
    const teacher = await Teacher.find({
        especialidade: { $regex: especialidade, $options: "i" }
    })
        .populate("userId", "nome email")
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
        .populate("userId", "nome email")

    if (!teacher) {
        const error = new Error("Professor não encontrado")
        error.statusCode = 404
        throw error
    }

    return teacher
}

const updateTeacherAvailability = async (id, ativo) => {
    const updateTeacher = await Teacher.findByIdAndUpdate(
        id,
        { ativo: ativo },
        { new: true, runValidators: true }
    )

    if (!updateTeacher) {
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