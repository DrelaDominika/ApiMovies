const mongoose = require('mongoose');
const AiringMovie = require('../models/airingMovies');

exports.airingMovies_get_all = (req, res, next) => {
    AiringMovie.find()
      .then((docs) => {
        res.status(200).json({
            message: 'List of all currently airing movies',
          info: docs,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }

exports.airingMovies_new = (req, res, next) => {
    const airingMovie = new AiringMovie({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      director: req.body.director,
      releaseDate: req.body.releaseDate,
      cinema: req.body.cinema,
      subtitles: req.body.subtitles,
      available_till: req.body.available_till,
      ticket_price: req.body.ticket_price
    });
    airingMovie
      .save()
      .then((doc) => {
        res.status(200).json({
          message: 'Added new currently airing movie',
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
     }


exports.airingMovies_get_by_id = (req, res, next) => {
    const id = req.params.airingMovieId;
    AiringMovie.findById(id)
      .then((doc) => {
        res.status(200).json({
          message: 'Details about the currently airing movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }

exports.airingMovies_change = (req, res, next) => {
    const id = req.params.airingMovieId;
    AiringMovie.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        director: req.body.director,
        releaseDate: req.body.releaseDate,
        cinema: req.body.cinema,
        subtitles: req.body.subtitles,
        available_till: req.body.available_till,
        ticket_price: req.body.ticket_price
      },
      { new: true }
    )
      .then((doc) => {
        res.status(200).json({
          message: 'Edited currently airing movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }

exports.airingMovies_delete = (req, res, next) => {
    const id = req.params.airingMovieId;
    AiringMovie.findByIdAndDelete(id)
      .then((doc) => {
        res.status(200).json({
          message: 'Deleted currently airing movie with id ' + id,
          info: doc,
        });
      })
      .catch((err) => res.status(500).json({ message: err }));
  }
