import mongoose from "mongoose"

const StudentsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
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
        },
    },
    {
        timestamps: true,
        collection: "students"
    }
)

export default mongoose.model("Students", StudentsSchema)