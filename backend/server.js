import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import UserRoute from './routes/userRoute';


dotenv.config();

const mongodbURL = config.MONGODB_URL;
mongoose.connect(mongodbURL, {
    useNewUrlParser: true
}).catch(error=> console.log(error.reason))

const app = express();

const PORT = process.env.PORT || 666

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id ===productId);
    if(product) 
        res.send(product);
    
    else 
        res.status(404).send({msg: "Product Not Found."})
    
});

app.user("/api/users", userRoute);

app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
});