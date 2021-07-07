import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import {getMovies, getMovieById, createMovie, deleteMovie , updateMovie ,createMovieReview , createReport , getReport} from '../controller/movieController.js'



router.route('/').get(getMovies).post(createMovie) //.post(protect, admin, createMovie) not working
router.route('/:id/reviews').post(createMovieReview)
router.route('/reports').post(createReport)
router.route('/reports').get(getReport)
router.route('/:id')
    .get(getMovieById)
    .delete(deleteMovie)
    .put(updateMovie)

export default router