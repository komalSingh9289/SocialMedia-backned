import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true,
    },
    lastname:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
    }
},
{
    timestamps:true,
})

const Users = mongoose.model('Users', userSchema);

export default Users;