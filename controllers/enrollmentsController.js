import enrollmentService from "../services/enrollmentsService.js";

const createEnrollments = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.createEnrollments(
            req.body
        );

        res.status(201).json({
            message: "Matrícula realizada com sucesso",
            data: enrollment
        });
    } catch (error) {
        next(error);
    }
};

const getAllEnrollments = async (req, res, next) => {
    try {
        const enrollments = await enrollmentService.getAllEnrollments()

        res.status(200).json({
            message: "Matriculas encontradas com sucesso",
            data: enrollments
        })

    } catch (error) {
        next(error)
    }
}

const getEnrollmentsById = async (req, res, next) => {
    try {
        const enrollments = await enrollmentService.getEnrollmentsById(req.params.id)

        res.status(200).json({
            message: "matriculas encontradas com sucesso",
            data: enrollments
        })

    } catch (error) {
        next(error)
    }
}

const getStudentsEnrollments = async (req, res, next) => {
    try {
        const enrollments = await enrollmentService.getStudentsEnrollments(req.params.id)

        res.status(200).json({
            message: "Matriculas do aluno encontradas",
            data: enrollments
        })

    } catch (error) {
        next(error)
    }
}
const getSubjectEnrollments = async (req, res, next) => {
    try {
        const enrollments = await enrollmentService.getSubjectEnrollments(req.params.id)

        res.status(200).json({
            message: "Matriculas da disciplina encontradas",
            data: enrollments
        })

    } catch (error) {
        next(error)
    }
}

const getEnrollmentsActive = async (req, res, next) => {
    try {
        const enrollments = await enrollmentService.getEnrollmentsActive(req.params.status)

        res.status(200).json({
            message: "Matriculas disponiveis encontradas",
            total: enrollments.lenght,
            data: enrollments
        })

    } catch (error) {
        next(error)
    }
}

const countEnrollments = async (req, res, next) => {
    try {
        const total = await enrollmentService.countEnrollments()

        res.status(200).json({
            message: "Total de matriculas",
            total
        })

    } catch (error) {
        next(error)
    }
}

const updateEnrollmentsNote = async (req, res, next) => {
    try {
        const updateNote = await enrollmentService.updateEnrollmentsNote(
            req.params.id,
            req.body.notaFinal
        )

        res.status(200).json({
            message: "Nota atualizada com sucesso",
            data: updateNote
        })

    } catch (error) {
        next(error)
    }
}

const updateEnrollmentsStatus = async (req, res, next) => {
    try {
        const updateStatus = await enrollmentService.updateEnrollmentsStatus(
            req.params.id,
            req.body.status
        );

        res.status(200).json({
            message: "Matricula atualizada com sucesso",
            data: updateStatus
        });
    } catch (error) {
        next(error);
    }
};

const deleteEnrollments = async (req, res, next) => {
    try {
        const enrollment = await enrollmentService.deleteEnrollments(req.params.id)

        res.status(200).json({
            message: "Matricula deletada com sucesso",
            data: enrollment
        })

    } catch (error) {
        next(error)
    }
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