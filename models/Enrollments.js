import mongoose from "mongoose";

const EnrollmentsSchema = new mongoose.Schema(
    {
        studentsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students",
            required: true
        },

        subjects: {
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
            trim: true,
            required: true
        }
    },
    {
        timestamps: true,
        collation: "enrollments"

    }
)

export default  mongoose.model("Enrollments", EnrollmentsSchema)