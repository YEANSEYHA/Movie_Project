import express from 'express'
const router = express.Router()
import { protect, admin } from '../middleware/authMiddleware.js'
import {getMovies, getMovieById, createMovie, deleteMovie , updateMovie} from '../controller/movieController.js'



router.route('/').get(getMovies).post(protect, admin, createMovie)

router.route('/:id')
    .get(getMovieById)
    .delete(deleteMovie)
    .put(updateMovie)




export default router