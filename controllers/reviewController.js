const Review = require("../Models/Reviews");

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    // store is saved as an ObjectId reference, not the full store object
    res.json(review);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Without populate - store field is just an ObjectId
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json(error);
  }
};

// With populate - store field is replaced with the full store document
exports.getReviewsPopulated = async (req, res) => {
  try {
    const reviews = await Review.find().populate("store");
    res.json(reviews);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Single review with store populated
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("store");
    res.json(review);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getReviewsByStore = async (req, res) => {
  try {
    const reviews = await Review.find({ store: req.params.storeId }).populate("store");
    res.json(reviews);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(review);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
