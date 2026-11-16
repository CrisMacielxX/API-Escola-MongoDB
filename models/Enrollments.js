import mongoose from "mongoose";

const EnrollmentsSchema = new mongoose.Schema(
    {
        studentsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students",
            required: true
        },

        subjectsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subjects",
            required: true
        },

        dataMatricula: {
            type: Date,
            default: Date.now
        },

        status: {
            type: String,
            enum: ["Ativa", "Concluida", "Cancelada"],
            default: "Ativa"
        },

        notaFinal: {
            type: Number,
            default: null
        }
    },
    {
        timestamps: true,
        collection: "enrollments"

    }
)

export default  mongoose.model("Enrollments", EnrollmentsSchema)