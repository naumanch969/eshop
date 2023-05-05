import Product from '../models/product.js';

export const getProducts = async (req, res) => {
    try {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({ categories: { $in: [qCategory] } });
        } else {
            products = await Product.find();
        }
        return res.status(200).json({ result: products, message: 'products fetched successfully!', success: true });
    } catch (error) {
        console.log(`error ----->\n`, error);
        res.status(404).json({ message: 'error in register - controllers/product.js', error, success: false });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { title, description, categories, img, size, color, price, inStock } = req.body;
        if (!title || !description || !categories.length || !img || !size || !color || !price || !inStock) {
            return res.status(400).json({ message: 'make sure to provide all the 7 fields (title,description,categories,img,size,color,price,inStock', success: false });
        }
        const newProduct = await Product.create({ title, description, categories, img, size, color, price, inStock });
        res.status(200).json({ result: newProduct, message: 'product created successfully!', success: true });
    } catch (error) {
        console.log(`error ----->\n`, error);
        res.status(404).json({ message: 'error in createProduct - controllers/product.js', error, success: false });
    }
};

export const getProduct = async (req, res) => {
    try {
        const findedProduct = await Product.findById(req.params.id);
        if (!findedProduct) {
            return res.status(400).json({ message: 'product not exist', success: false });
        }
        return res.status(200).json({ result: findedProduct, message: 'product fetched successfully', success: true });
    } catch (error) {
        console.log(`error ----->\n`, error);
        res.status(404).json({ message: 'error in getProduct - controllers/product.js', error, success: false });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const findedProduct = await Product.findById(req.params.id);
        if (!findedProduct) {
            return res.status(400).json({ message: 'product not exist', success: false });
        }

        const body = req.body
        delete body._id

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: body }, { new: true });
        return res.status(200).json({ result: updatedProduct, message: 'product updated successfully!', success: true });
    } catch (error) {
        console.log(`error ----->\n`, error);
        res.status(404).json({ message: 'error in updateProduct - controllers/product.js', error, success: false });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const findedProduct = await Product.findById(req.params.id);
        if (!findedProduct) {
            return res.status(400).json({ message: 'product not exist', success: false });
        }
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({ result: deletedProduct, message: 'product deleted successfully!', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in deleteProduct - controllers/product.js', error, success: false })
    }
}