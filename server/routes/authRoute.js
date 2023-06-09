import express from 'express';
import {registerController, loginController,testController} from '../controllers/authContoller.js';
import { requireSignIn, isAdmin } from '../middlwares/authMiddlewares.js';

// router Object
const router =express.Router()

// routing  
// REGISTER || METHOD POST

router.post('/register',registerController);

// Login // post
router.post('/login',loginController);

// test route

router.get('/test',requireSignIn, isAdmin,testController);

// protected route auth

router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
});


export default router

