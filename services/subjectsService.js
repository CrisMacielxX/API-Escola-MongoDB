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

    if (!subjects) {
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

const getSubjectHours = async (min, max) => {
    return await Subjects.find({
        cargaHoraria: { $gte: Number(min), $lte: Number(max) }
    })
}

const updateSubjects = async (id, data) => {
    const subjects = await Subjects.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!subjects) {
        const error = new Error("Diciplina não encontrada para atualização")
        error.statusCode = 404
        throw error
    }

    return subjects

}

const updateSubjectsAvailability = async (id, ativa) => {
    const updateSubjects = await Subjects.findByIdAndUpdate(
        id,
        { ativa: ativa },
        { new: true, runValidators: true }
    );

    if (!updateSubjects) {
        const error = new Error("Disciplina não encontrada");
        error.statusCode = 404;
        throw error;
    }

    return updateSubjects;
};

const deleteSubjects = async (id) => {
    //
    /*
    const matriculasExistentes = await Enrollment.findOne({ subjectId: id });
    if (matriculasExistentes) {
        const error = new Error("Não é possível excluir disciplinas que possuem matrículas cadastradas.");
        error.statusCode = 400;
        throw error;
    }
    */

    return await Subjects.findByIdAndDelete(id);
};

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