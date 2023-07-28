const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    post:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'post'
    }
    

    },{

        timestamps: true

});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
