import express from 'express';
import {registerController, loginController} from '../controllers/authContoller.js';

// router Object
const router =express.Router()

// routing  
// REGISTER || METHOD POST

router.post('/register',registerController);

// Login // post
router.post('/login',loginController)


export default router

