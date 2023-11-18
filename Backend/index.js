import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.route.js'



mongoose.connect("mongodb+srv://root:9082003asdF@books-store-mern.ho1nule.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch ((err)=>{
    console.log(err);
});




const app =express();

app.use(express.json());

app.use(cors());
app.listen (3001,() => {
console.log('Sever listening on port 3001');
});


app.use('/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message=err.message || 'Internal sever error'
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    
    });
    
    });
