import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
},
{
    timestamps:true,
})