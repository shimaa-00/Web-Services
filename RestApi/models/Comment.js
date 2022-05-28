import mongoose from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
},{timestamps: true}); 

export default mongoose.model('Comment', CommentSchema);