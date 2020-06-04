const express = require('express');

const db = require('./db/models');

const router = express.Router();

router.get('/', async (req, res, next) => {
  // throw new Error('This is a test error');

  try {
    const books = await db.Book.findAll({order: [['title', 'ASC']]});
    res.render('book-list', { title: 'Books', books });
  } catch (err) {
    next(err);
  }

});

module.exports = router;