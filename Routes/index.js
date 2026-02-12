const express = require("express");
const router = new express.Router();
const movieController = require("../controllers/movieController");
const articleController = require("../controllers/articleController");
const userRoutes = require("./user");

router.get("/", movieController.showMovies);
//access URl params

router.get("/articles/:title", articleController.getArticleByTitle);
router.get("/pokemon", movieController.getAllPokemon);
module.exports = router;
