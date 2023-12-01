// To setup product related routes.
const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
       res.status(200).json({
           message: 'Handling GET requests to /products'
       });
});
router.post('/', (req, res, next) => {
       res.status(201).json({
           message: 'Handling POST requests to /products'
       });
});
//Get details of a single product using product id
router.get('/:productId', (req, res, next) => {
       const id = req.params.productId;
       if(id === 'special'){
             res.status(200).json({
                 message: 'You discovered the special ID',
                 id: id
             });
       } else {
             res.status(200).json({
                 message: 'You passed an ID'
             });
       }
});
router.patch('/:productId', (req, res, next) => {
       res.status(200).json({
           message: 'Updated produt!!'
       });
});
router.delete('/:productId', (req, res, next) => {
       res.status(200).json({
           message: 'Deleted produt!!'
       });
});
module.exports = router;