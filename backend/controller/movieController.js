import Movie from '../models/movieModel.js'
import asyncHandler from 'express-async-handler'


// Fetch    all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async(req,res)=>{
    const movies = await Movie.find({})

    res.json(movies)
})

// Fetch    Fetch single movie
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = asyncHandler(async(req,res)=>{
    const movie = await Movie.findById(req.params.id)
        
        if(movie){
            res.json(movie)
        }else{
            res.status(404)
            throw new Error('Movie not found')
        }
})

export {
    getMovies,
    getMovieById
}


