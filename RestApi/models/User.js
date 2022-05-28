import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: String,
        required: true,
    },
    isSuspended: {
        type: Boolean,
        required: false
    },
},{timestamps: true}); 

export default mongoose.model('User', UserSchema);