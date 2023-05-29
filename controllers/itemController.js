const Item = require('../models/itemModel');

// GET request - Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving items.' });
  }
};

// POST request - Add a new item
exports.addItem = async (req, res) => {
  try {
    const { Name, Price } = req.body;
    const newItem = new Item({ Name, Price });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the item.' });
  }
};

// DELETE request - Delete an item by ID
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.json({ message: 'Item deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the item.' });
  }
};

