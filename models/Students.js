import mongoose from "mongoose";

const StudentsSchema = new mongoose.Schema(
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

        idade: {
            type: Number,
            required: true
        },

        matricula: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        ativo: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        collation: "students"
    }
)

export default mongoose.model("students", StudentsSchema)