const Book = require('../models/Book');

const index = async (req, res, next) => {
  try {
    // #swagger.tags = ['Books']
    // #swagger.summary = 'Get all books'
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    // #swagger.tags = ['Books']
    // #swagger.summary = 'Get a book by ID'
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    // #swagger.tags = ['Books']
    // #swagger.summary = 'Create a new book'
    const { title, author, coverUrl, description, publishedYear } = req.body;

    const newBook = new Book({
      title,
      author,
      coverUrl,
      description,
      publishedYear,
    });

    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    // #swagger.tags = ['Books']
    // #swagger.summary = 'Update a book by ID'
    const { id } = req.params;
    const { title, author, coverUrl, description, publishedYear } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        title,
        author,
        coverUrl,
        description,
        publishedYear,
        updatedAt: Date.now(),
      },
      { new: true },
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    // #swagger.tags = ['Books']
    // #swagger.summary = 'Delete a book by ID'
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
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
