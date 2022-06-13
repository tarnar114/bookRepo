const express = require("express");
const router = express.Router();
const Book = require("../controllers/BookController");
router.get("/book", async (req, res) => {
  const books = await new Book().getBooks();
  console.log('book router')
  console.log(books);
  res.send(books);
});
router.post("/book", async (req, res) => {
  console.log(req.body);
  const booksVars = req.body;

  let books = await new Book().putBook(
    booksVars.Name,
    booksVars.Genre,
    booksVars.Author,
    booksVars.Publisher
  );
  console.log(books);
});

router.put("/books/:bookId", async (req, res) => {
  const bookVars = req.body;

  let books = await new Book().updateBook(
    bookVars.ID,
    bookVars.Name,
    bookVars.Genre,
    bookVars.Author,
    bookVars.Publisher
  );
  console.log(books);
});
router.delete("/books/:bookId", async (req, res) => {
  const bookId = req.params.bookId;
  console.log(bookId);
  let books = await new Book().delBooks(bookId);
  console.log(books);
});
module.exports = router;
