const User = require('../models/User');

const index = async (req, res, next) => {
  try {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Get all users'
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Get a user by ID'
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Create a new user'
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      dateOfBirth,
      password,
    } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      address,
      dateOfBirth,
      password,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Update a user by ID'
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      dateOfBirth,
      password,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        phone,
        address,
        dateOfBirth,
        password,
        updatedAt: Date.now(),
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    // #swagger.tags = ['Users']
    // #swagger.summary = 'Delete a user by ID'
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
