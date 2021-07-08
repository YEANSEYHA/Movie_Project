import mongoose from 'mongoose'

// review table contain all information about movie review comment and report
const reviewSchema = mongoose.Schema(
  {
    report: { type: Number },
    comment: { type: String},
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const movieSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    year:{
      type: String,
      required: true
    },
    duration:{
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    synopsis:{
      type: String,
      required: true
    },
    imageUrl:{
      type: String,
      required: true
    },
    videoUrl:{
      type: String,
      required: true
    },
    nbLike: {
      type: Number,
      required: true,
      default : 0
    },
    nbView:{
      type: Number,
      required: true,
      default: 0
    }
    
   
  },
  {
    timestamps: true,
  }
)

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
