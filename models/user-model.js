import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: false,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
    },
    bio: {
        type: String,
        maxlength: 150,
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    following:[{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
},
    {
        timestamps: true,
    })

const Users = mongoose.model('User', userSchema);

export default Users;