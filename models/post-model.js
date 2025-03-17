import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    image: { type: String, reuired: true, },
    caption: {
        type: String,
        maxlength: 2200,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},
    {
        timestamps: true,
    });

const Post = mongoose.model("Post", postSchema);
export default Post;