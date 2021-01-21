const mongoose = require('mongoose');
const Movie = require('../models/Movie');

exports.movies_get_all = (req, res, next) => {
    Movie.find()
      .then((docs) => {
        res.status(200).json({
            message: 'List of all movies',
          info: docs,
        });
      })
      .catch((err) => res.status(500).json({ wiadomość: err }));
  }

exports.movies_new = (req, res, next) => {
    const movie = new Movie({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      rating:req.body.rating,
      director: req.body.director,
      releaseDate: req.body.releaseDate
    });
    movie
      .save()
      .then((doc) => {
        res.status(200).json({
          message: 'Added new movie',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
     }


exports.movies_get_by_id = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findById(id)
      .then((doc) => {
        res.status(200).json({
          message: 'Details about the movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }

exports.movies_change = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        rating:req.body.rating,
        director: req.body.director,
        releaseDate: req.body.releaseDate
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          message: 'Edited movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }

exports.movies_delete = (req, res, next) => {
    const id = req.params.movieId;
    Movie.findByIdAndDelete(id)
      .then((doc) => {
        res.status(200).json({
          message: 'Deleted movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }
