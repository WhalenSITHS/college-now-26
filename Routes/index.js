const express = require("express");
const router = new express.Router();
const movieController = require("../controllers/movieController");
const articleController = require("../controllers/articleController");
const userRoutes = require("./user");
const reviewRoutes = require("./reviews");
const shopController = require("../controllers/shopController");
const auth = require("../middleware/auth");
router.post("/save-shop", shopController.createShop);

router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);
router.get("/", movieController.showMovies);
//access URl params

router.get("/articles/:title", articleController.getArticleByTitle);
router.get("/pokemon", auth, movieController.getAllPokemon);
module.exports = router;
