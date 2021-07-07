import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from '../controller/userController.js'
import {protect} from '../middleware/authMiddleware.js'



router.route('/signup').post(registerUser).get(getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect,getUserProfile)
router.route('/:id').delete(deleteUser)
router.route('/profile').put(updateUserProfile)
router.route('/account/:id').put(updateUser)
router.route('/:id').get(getUserById)

export default router