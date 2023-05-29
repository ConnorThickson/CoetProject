const User = require('../models/userModel');
const bcrypt = require('bcrypt');
// exports.loginUser = (req, res) => {
//     //need to do
// };
// exports.getLoggedInUser = (req, res) => {
//     //need to do
// };

// POST request - Add a new user
exports.addUser = async (req, res) => {
  
    var { Username, Password } = req.body;
   bcrypt.hash(Password, 1, async function(err, hash) {
      try {
        Password = hash;
        const newUser = new User({ Username, Password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser.Username);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the user.' });
      }
    });
};

// GET request - Get a specific user by ID
exports.getUser = async (req, res) => {
  try {

    const user = await User.find().limit(1).sort({$natural:-1});
    
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    //console.log(user[0].Username);
    res.json(user[0].Username);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving the user.' });
  }
};