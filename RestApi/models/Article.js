import mongoose from 'mongoose';
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
    },
    date: {
        type: String,
        required: true
    },
},{timestamps: true}); 

export default mongoose.model('Article', ArticleSchema);