const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    // include the array of ids of all comments in this post schema it self

    comments:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref:'Comment'
        }

    ]
    

    },{

        timestamps: true

});

const Post = mongoose.model('post' , postSchema);
module.exports = Post;
