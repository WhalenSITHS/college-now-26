const express = require("express");
const router = new express.Router();
const reviewController = require("../controllers/reviewController");

router.post("/", reviewController.createReview);

// Without populate - store shows as ObjectId
router.get("/", reviewController.getReviews);

// With populate - store is replaced with full store document
router.get("/populated", reviewController.getReviewsPopulated);

router.get("/store/:storeId", reviewController.getReviewsByStore);

// Single review - store is populated
router.get("/:id", reviewController.getReviewById);

router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
