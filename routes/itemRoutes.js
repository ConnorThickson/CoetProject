const express = require('express');
const router = express.Router();

const {
    getAllItems,
    addItem,
    deleteItem
} = require('../controllers/itemController')

router.post('/items', addItem);
router.get('/items', getAllItems);
router.delete('/items/:id',deleteItem);


module.exports = router;
