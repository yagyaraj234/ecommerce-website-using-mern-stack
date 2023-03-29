import express from 'express';
import {registerController} from '../controllers/authContoller.js';

// router Object
const router =express.Router()

// routing  
// REGISTER || METHOD POST

router.post('/register',registerController);


export default router

