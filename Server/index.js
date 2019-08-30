const express = require('express');
const app = express();
const getProducts = require('./getProducts')
const products = require('../products');
const SERVER_PORT = 4060;

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));

app.get('/api/products', getProducts.getProducts) //Req and Res recieved by getProducts by default

app.get(`/api/products/:id`, getProducts.getProducts) //Call getProducts again from getProducts.js to call for the same set of products.
