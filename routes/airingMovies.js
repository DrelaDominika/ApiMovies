const express = require("express");
const router = express.Router();
const airingMovieController = require("../controllers/airingMovies");

//import middleware
const authorization = require("../middleware/authorization");

//listing all currently airing movies
router.get('/', airingMovieController.airingMovies_get_all);

//adding new currently airing movies
router.post('/', authorization, airingMovieController.airingMovies_new);

// details currently airing movies with id
router.get('/:airingMovieId', airingMovieController.airingMovies_get_by_id);

//changing currently airing movies with id
router.patch('/:airingMovieId', authorization, airingMovieController.airingMovies_change);

//deleting currently airing movies with id
router.delete('/:airingMovieId', authorization, airingMovieController.airingMovies_delete);

module.exports = router;