import mongoose, { Schema, model } from 'mongoose'

const cartSchema = Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: `User`, required: true },
        products: [
            {
                productId: { type: String, },
                quantity: { type: String, default: 1 }
            }
        ],
    },
    { timestamps: true }
)

const cartModel = new model(`cart`, cartSchema)

export default cartModel;