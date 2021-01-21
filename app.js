const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());

//import routes
const moviesRouter = require("./routes/movies");
const usersRoutes = require("./routes/users");

//logger
app.use(morgan('combined'));

//parsing body
app.use(bodyParser.json());

//routes
app.use('/movies', moviesRouter);
app.use('/users',usersRoutes)



//connectiong to MongoDB
mongoose.connect(
    'mongodb+srv://testuser:' +
      process.env.passwordDB +
      '@cluster0.jyqcr.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

//error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = app;
