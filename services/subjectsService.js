import Subjects from "../models/Subjects.js"
import Teacher from "../models/Teachers.js"
import subjectsController from "../controllers/subjectsController.js"

const createSubjects = async (data) => {
    const { nome, codigo, cargaHoraria, teacherId } = data

    if (!nome || !codigo || !teacherId || !cargaHoraria) {
        const error = new Error("Informe todos os dados")
        error.statusCode = 400
        throw error
    }

    const teacher = await Teacher.findById(teacherId)

    if (!teacher) {
        const error = new Error("Id do professor invalido")
        error.statusCode = 400
        throw error
    }
    if (teacher.ativo === false) {
        const error = new Error("Professor indisponivel")
        error.statusCode = 400
        throw error
    }

    const subjects = await Subjects.create({
        nome,
        codigo,
        cargaHoraria,
        teacherId,
    })

    teacher.ativo = false
    await teacher.save()

    return subjects
}

const getAllSubjects = async () => {
    return Subjects.find()
    .populate("teacherId")
}

const getSubjectsById = async (id) => {
    const subjects = await Subjects.findById(id)

    if(!subjects) {
        const error = new Error("Diciplina não encontrada")
        error.statusCode = 404
        throw error
    }

    return subjects
}

const getSubjectsByTeacher = async (idTeacher) => {
    const subjects = await Subjects.find({ teacherId: idTeacher })

    return subjects

}

const getSubjectsActive = async () => {
    return Subjects.find({
        ativa: true,
    })
}


export default {
    createSubjects,
    getAllSubjects,
    getSubjectsById,
    getSubjectsByTeacher,
    getSubjectsActive,
}