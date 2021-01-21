const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movies");

//import middleware
const authorization = require("../middleware/authorization");

//listing all movies
router.get('/', movieController.movies_get_all);

//adding new movie
router.post('/', authorization, movieController.movies_new);

// details movie with id
router.get('/:movieId', movieController.movies_get_by_id);

//changing movie with id
router.patch('/:movieId', authorization, movieController.movies_change);

//deleting movie with id
router.delete('/:movieId', authorization, movieController.movies_delete);

module.exports = router;
 