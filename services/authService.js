import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const register = async (data) => {
    const { nome, email, password, telefone, role } = data

    if (!nome || !email || !password) {
        throw new Error("Nome, email e senha são obrigatorios ")
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
        throw new Error("Já existe um usuario com este email")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        nome,
        email,
        password: hashedPassword,
        telefone,
        role: role || "user",
        ativo: true
    })

    return user

}

const login = async (data) => {
    const { email, password } = data

    if (!email || !password) {
        throw new Error("Email e senha obrigatorios")
    }

    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        throw new Error("Email invalido")
    }

    if (user.ativo === false) {
        throw new Error("Usuario inativo")
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password)

    if (password === false) {
        throw new Error("Senha incorreta")
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )

    return {
        user: {
            _id: user._id,
            nome: user.nome,
            email: user.email,
            telefone: user.telefone,
            role: user.role,
            ativo: user.ativo,
        },
        token,
    };
}

export default {
    register,
    login,
}