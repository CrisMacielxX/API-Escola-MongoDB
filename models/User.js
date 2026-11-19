import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
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

        password: {
            type: String,
            required: true,
            select: false
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        },

        ativo: {
            type: Boolean,
            default: true
        },

        telefone: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        collection: "user"
    }
)

export default mongoose.model("User", UserSchema)