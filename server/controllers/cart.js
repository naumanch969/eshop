import Cart from '../models/cart.js'

export const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find()
        return res.status(200).json({ result: carts, message: 'carts fetched successfully!', success: true })
    } catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getCarts - controllers/cart.js', error, success: false })
    }
}

export const createCart = async (req, res) => {
    try {
        const { products } = req.body
        if (!products) return res.status(400).json({ message: 'make sure to provide products field', success: false })

        const newCart = await Cart.create({ user: req.user.id, products })
        res.status(200).json({ result: newCart, message: 'cart created successfully!', success: true })
    } catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in createCart - controllers/cart.js', error, success: false })
    }
}

export const getUserCart = async (req, res) => {
    try {
        const findedCart = await Cart.find({ user: req.params.userId })
        if (!findedCart) return res.status(400).json({ message: 'cart not exist', success: false })

        return res.status(200).json({ result: findedCart, message: 'user cart fetched successfully', success: true })
    } catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getUserCart - controllers/cart.js', error, success: false })
    }
}

export const updateCart = async (req, res) => {
    try {
        const findedCart = await Cart.findById(req.params.id)
        if (!findedCart) return res.status(400).json({ message: 'cart not exist', success: false })

        const body = req.body
        delete body._id

        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, { $set: body }, { new: true })
        return res.status(200).json({ result: updatedCart, message: 'cart updated successfully!', success: true })
    } catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in updateCart - controllers/cart.js', error, success: false })
    }
}

export const deleteCart = async (req, res) => {
    try {
        const findedCart = await Cart.findById(req.params.id)
        if (!findedCart) return res.status(400).json({ message: 'cart not exist', success: false })

        const deletedCart = await Cart.findByIdAndDelete(req.params.id)
        return res.status(200).json({ result: deletedCart, message: 'cart deleted successfully!', success: true })
    } catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in deleteCart - controllers/cart.js', error, success: false })
    }
}
