require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500;
const database_url = process.env.database_url;
const product_model = require('./Schema/product.js')

const app = express()

mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to database'))
.catch(error => console.log(error));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.send('hello world')
})

app.get('/products', async(req, res) => {
    try {
        const products = await product_model.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

