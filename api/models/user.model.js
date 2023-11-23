import mongoose from "mongoose";
//schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    timestamps: true // Add the property assignment for timestamps
});
//model
const User=mongoose.model('User',userSchema);
//to use this model anywhere else in our code
export default User;

