import mongoose, { Schema, model } from 'mongoose'

const userSchema = Schema(
    {
        name: { type: String, required: true },
        img: { type: String },
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
    },
    { timestamps: true }
)

const userModel = new model(`User`, userSchema)

export default userModel;