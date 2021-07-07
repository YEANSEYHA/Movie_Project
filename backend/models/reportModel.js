import mongoose from 'mongoose'

const reportSchema = mongoose.Schema(
    {
        user: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        movietitle:{
            type: String
        },
        message:{
            type: String
        }

        
    }
)
const Report = mongoose.model('Report',reportSchema)
export default Report