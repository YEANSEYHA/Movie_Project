import mongoose from 'mongoose'

const movieSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    
}
)

const Movie = mongoose.model('movie', movieSchema)
export default Movie
