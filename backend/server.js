import express from 'express';
import data from './data';

const app = express();

const PORT = process.env.PORT || 666

app.get("/api/products", (req, res) => {

    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`)
});