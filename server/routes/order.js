import express from 'express'
import { getOrders, getUserOrder, getMonthlyIncome, createOrder, updateOrder, deleteOrder } from '../controllers/order.js'
import { userAuthorize, adminAuthorize } from '../middleware/auth.js'


const router = express.Router()

router.get('/all', adminAuthorize, getOrders)
router.get('/get/:userId', userAuthorize, getUserOrder)
router.get('/income', adminAuthorize, getMonthlyIncome)

router.post('/create', adminAuthorize, createOrder)

router.put('/update/:id', adminAuthorize, updateOrder)

router.delete('/delete/:id', userAuthorize, deleteOrder)

export default router;