const { addToLikedMovie, getLikedmovies, removeFromLikedMovies } = require('../controller/Usercontroller');
const express = require('express');
const router = express.Router();

router.post('/add', addToLikedMovie);
router.get('/liked/:email', getLikedmovies);
router.put('/delete', removeFromLikedMovies)

module.exports = router;