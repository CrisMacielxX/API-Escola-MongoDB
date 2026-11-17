import Enrollments from "../models/Enrollments.js";
import Students from "../models/Students.js";
import Subjects from "../models/Subjects.js";

const createEnrollments = async (data) => {
    const { studentsId, subjectsId, notaFinal } = data;

    const student = await Students.findById(studentsId);
    if (!student) {
        const error = new Error("Aluno não encontrado.");
        error.statusCode = 404;
        throw error;
    }

    const subject = await Subjects.findById(subjectsId);
    if (!subject) {
        const error = new Error("Disciplina não encontrada.");
        error.statusCode = 404;
        throw error;
    }

    const newEnrollment = await Enrollments.create({
        studentsId,
        subjectsId,
        notaFinal
    });

    return newEnrollment;
};

const getAllEnrollments = async () => {
    return Enrollments.find()
        .populate("teacherId")
        .populate("studentId")
}

const getEnrollmentsById = async (id) => {
    const enrollments = await Enrollments.findById(id)

    if (!enrollments) {
        const error = new Error("Matricula não encontrada")
        error.statusCode = 404
        throw error
    }

    return enrollments
}

const getStudentsEnrollments = async (idStudents) => {
    const enrollments = await Enrollments.find({ studentsId: idStudents })

    return enrollments
}

const getSubjectEnrollments = async (idSubjects) => {
    const enrollments = await Enrollments.find({ subjectsId: idSubjects })
        .populate("studentsId")

    return enrollments
}

const getEnrollmentsActive = async (status) => {
    return Enrollments.find({ status: status })
}


const countEnrollments = async () => {
    return Enrollments.countDocuments()
}

const updateEnrollmentsNote = async (id, notaFinal) => {
    const updateNote = await Enrollments.findByIdAndUpdate(
        id,
        { notaFinal: notaFinal },
        { new: true, runValidators: true }
    )

    if (!updateNote) {
        const error = new Error("Matricula não encontrada")
        error.statusCode = 404
        throw error
    }

    return updateNote
}


const updateEnrollmentsStatus = async (id, status) => {
    const updateStatus = await Enrollments.findByIdAndUpdate(
        id,
        { status: status },
        { new: true, runValidators: true }
    );

    if (!updateStatus) {
        const error = new Error("Matricula não encontrada");
        error.statusCode = 404;
        throw error;
    }

    return updateStatus;
};

const deleteEnrollments = async (id) => {
    const enrollments = await Enrollments.findByIdAndDelete(id)

    if (!enrollments) {
        const error = new Error("Matricula não encontrada")
        error.statusCode = 404
        throw error
    }

    return enrollments
}


export default {
    createEnrollments,
    getAllEnrollments,
    getEnrollmentsById,
    getStudentsEnrollments,
    getSubjectEnrollments,
    getEnrollmentsActive,
    countEnrollments,
    updateEnrollmentsNote,
    updateEnrollmentsStatus,
    deleteEnrollments,
};