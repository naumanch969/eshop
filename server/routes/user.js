import express from 'express'
import { getAllUsers, register, login, getUserStats, getUser, updateUser, deleteUser } from '../controllers/user.js'
import { userAuthorize, adminAuthorize } from '../middleware/auth.js'


const router = express.Router()

router.get('/all', adminAuthorize, getAllUsers)
router.get('/:id', adminAuthorize, getUser)
router.get('/stats', adminAuthorize, getUserStats)

router.post('/register', register)

router.put('/login', login)
router.put('/update/:id', userAuthorize, updateUser)

router.delete('/delete/:id', userAuthorize, deleteUser)

export default router;