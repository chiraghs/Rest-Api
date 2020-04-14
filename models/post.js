const mongoose = require('mongoose')
const Scheme = mongoose.Schema;

const PostSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
});

const Ninja = mongoose.model('post', PostSchema);

module.exports = Post;