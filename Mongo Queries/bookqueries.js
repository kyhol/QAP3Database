db.books.insertMany([
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1937,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    publishedYear: 1949,
  },
]);

db.books.find({}, { title: 1, _id: 0 });

db.books.find({ author: "J.R.R. Tolkien" });

db.books.updateOne({ title: "1984" }, { $set: { genre: "Science Fiction" } });

db.books.deleteOne({ title: "The Hobbit" });

//Is this really it? I feel like I'm missing something. :shrug:
