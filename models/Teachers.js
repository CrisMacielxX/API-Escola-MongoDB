import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        especialidade: {
            type: String,
            trim: true
        },

        telefone: {
            type: String,
            trim: true,
            unique: true
        },

        ativo: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        collation: "teachers"
    }
)

export default mongoose.model("Teacher", TeacherSchema)