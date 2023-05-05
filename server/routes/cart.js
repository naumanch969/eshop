import express from 'express'
import { getCarts, getUserCart, createCart, updateCart, deleteCart } from '../controllers/cart.js'
import { userAuthorize, adminAuthorize } from '../middleware/auth.js'


const router = express.Router()

router.get('/all', adminAuthorize, getCarts)
router.get('/get/:userId', userAuthorize, getUserCart)

router.post('/create', userAuthorize, createCart)

router.put('/update/:id', userAuthorize, updateCart)

router.delete('/delete/:id', userAuthorize, deleteCart)

export default router;