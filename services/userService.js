import User from "../models/User.js"

const updateMe = async (userId, data) => {
    delete data.role
    delete data.ativo
    delete data.password

    if(data.email){
        const emailExists = await User.findOne({
            email: data.email,
            _id: {$ne: userId}
        })

    if(emailExists) {
        throw new Error("Já existe um usuario com este email")
    }
    }

    const user = await User.findByIdAndUpdate(userId, data, {
        new: true,
        runValidators: true
    })

    return user
}

const getUsers = async () => {
    return User.find()
}

export default {
    updateMe,
    getUsers
}