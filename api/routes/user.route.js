import express from 'express';
import test from '../controllers/user.controller.js';

const router=express.Router();
//creating api route
//req is the data we get from brower
//res is the data we send back to the browser

//import test from user.controller.js in controllers
router.get('/test',test);
export default router;