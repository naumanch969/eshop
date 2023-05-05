import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
// gh
import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'
import orderRoutes from './routes/order.js'
import cartRoutes from './routes/cart.js'
import stripeRoutes from './routes/stripe.js'

dotenv.config()
const app = express()
// const mongooseURL = process.env.COMPASS_URL
const mongooseURL = process.env.ATLAS_URL
const port = process.env.PORT

app.use(cors())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' })); // define the size limit
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));	// define the size limit
app.use(bodyParser.json())

app.use('/stripe', stripeRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/cart', cartRoutes);

app.get('/', (req, res) => res.status(200).json({ message: 'App is Working' }))

mongoose.connect(mongooseURL)
    .then(() => app.listen(port, () => console.log('listening at the port ', port)))
    .catch((error) => console.log('error in connecting to mongoDB -----> \n', error))