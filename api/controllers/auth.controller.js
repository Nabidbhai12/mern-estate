import express from 'express';
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
   const {username,email,password}=req.body;
    console.log(username,email,password);
    const hashpassword=bcryptjs.hashSync(password,10);

    const newUser=new User({username,email,password:hashpassword});
    try{
   await newUser.save();
   res.status(201).json({message:'User created'});
    }catch(err){
        res.status(409).json({message:err.message});
    }
   
}
export default signup;