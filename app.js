const express = require('express');
const app = express();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');
const emailRoutes = require('./api/routes/email');
app.use('/products', productRoutes);
app.use('/order', orderRoutes);
app.use('/email', emailRoutes);
module.exports = app;