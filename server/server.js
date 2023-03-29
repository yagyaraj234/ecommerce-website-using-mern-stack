import Express  from "express";
import dotenv from 'dotenv' ;
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'

// configure Port/env
dotenv.config();
const PORT=process.env.PORT  || 8080;


const app =Express();

// Database config
    connectDB();


// middlewares
app.use(Express.json());
app.use(morgan('dev')) 

// Routes

app.use('/api/v1/auth',authRoutes)

// Rest Apis
app.get('/',(req,res)=>{
    res.send('Hello');
}).listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
});