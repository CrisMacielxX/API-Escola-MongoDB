import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
    {
        userId: {
            type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true

        },

        especialidade: {
            type: String,
            trim: true
        },

        ativo: {
            type: Boolean,
            default: true
        },
    },
    {
        timestamps: true,
        collection: "teachers"
    }
)

export default mongoose.model("Teacher", TeacherSchema)