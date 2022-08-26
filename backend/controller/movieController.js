import Movie from "../models/movieModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all movies
// @route   GET /api/movies
// @access  Public
const getMovies = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };
  // Fields to exclude
  const removeFields = ['page', 'limit'];
  //Loop over removeFields and delete
  removeFields.forEach(param => delete reqQuery[param])
  // Create query string
  let queryStr = JSON.stringify(reqQuery)
  // Create operators ($gt, $gte)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  // Fetch movie from mongoDB
  query = Movie.find(JSON.parse(queryStr))
  console.log(queryStr)

  // Pagination
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Movie.countDocuments();



  query = query.skip(startIndex).limit(limit);

  //Executing query
  const movies = await query
  // pagination result
  const pagination = {};
  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    }
  }
  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    }
  }

  res.json({ movies, pagination });
});

// Fetch    Fetch single movie
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = asyncHandler(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  try {
    if (movie) {
      res.json(movie);
    }
    res.status(404);
    throw new Error("Movie not found");
  } catch (err) {
    next(err);
  }
});
// @desc    Create a movie
// @route   POST /api/movies
// @access  Private/Admin
const createMovie = asyncHandler(async (req, res) => {
  const { title, genre } = req.body;

  const createdMovie = await Movie.create({
    user: req.user._id,
    title,
    genre,
  });
  res.status(201).json(createdMovie);
});

// @desc    Delete movie
// @route   DELETE /api/movies
// @access  Public
const deleteMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    await movie.remove();
    res.json({ message: "Movie removed" });
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
});

const updateMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (movie) {
    movie.title = req.body.title;
    movie.genre = req.body.genre;

    const updateMovie = await movie.save();
    res.json({
      title: updateMovie.title,
      genre: updateMovie.genre,
    })
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
})

export { getMovies, getMovieById, createMovie, deleteMovie, updateMovie };
