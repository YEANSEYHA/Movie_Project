import Movie from '../models/movieModel.js'
import asyncHandler from 'express-async-handler'



// @desc    Fetch all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res) => {
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
// @desc    Create a movie
// @route   POST /api/movies
// @access  Private/Admin
const createMovie = asyncHandler(async (req, res) => {
    const { title, genre} = req.body
    
    const createdMovie = await Movie.create({
        user: req.user._id,
        title,
        genre
      })
  
    
    res.status(201).json(createdMovie)
  })
// @desc    Delete a movie
// @route   DELETE /api/movies/:id
// @access  Private/Admin
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id)

  if (movie) {
    await movie.remove()
    res.json({ message: 'movie removed' })
  } else {
    res.status(404)
    throw new Error('Movie not found')
  }
})

// @desc    Update a movie
// @route   PUT /api/movies/:id
// @access  Private/Admin
const updateMovie= asyncHandler(async (req, res) => {
  const {
    title,
    genre
  } = req.body

  const movie = await Movie.findById(req.params.id)

  if (movie) {
    movie.title = title
    movie.genre = genre

    const updatedMovie = await movie.save()
    res.json(updatedMovie)
  } else {
    res.status(404)
    throw new Error('Movie not found')
  }
})


export {
    getMovies,
    getMovieById,
    createMovie,
    deleteMovie,
    updateMovie
}


