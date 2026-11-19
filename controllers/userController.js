import userService from "../services/userService.js"

const getMe = async (req, res, next) => {
    try {
        res.status(200).json({
            message: "Usuario logado encontrado",
            data: req.user
        })
    } catch (error) {
        next(error)
    }
}

const updateMe = async (req, res, next) => {
    try {
        const user = await userService.updateMe(req.user._id, req.body)

        res.status(200).json({
            message: "Perfil atualizado",
            data: user
        })

    } catch (error) {
        next(error)
    }
}

const getUsers = async (req, res, next) => {
    try {
        const user = await userService.getUsers()

        res.status(200).json({
            message: "Usuarios enconstrados com sucesso",
            data: user
        })


        } catch (error) {
            next(error)
        }
    }

export default {
        getMe,
        updateMe,
        getUsers
    }