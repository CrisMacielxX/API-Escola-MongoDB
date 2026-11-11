import mongoose from "mongoose"

const SubjectsSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },

        codigo: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
            required: true
        },


        ativa: {
            type: Boolean,
            default: true
        },
    },
    {
        collection: "subjects",
        timestamps: true,
    }
)

export default mongoose.model("Subjects", SubjectsSchema)