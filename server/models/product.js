import mongoose, { Schema, model } from 'mongoose'

const productSchema = Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        categories: { type: Array, required: true },
        img: { type: String, required: true },
        size: { type: String },
        color: { type: String },
        price: { type: String, required: true },
        inStock: { type: Boolean, required: true },
    },
    { timestamps: true }
)

const productModel = new model(`product`, productSchema)

export default productModel;