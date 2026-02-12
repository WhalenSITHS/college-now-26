const getArticleByTitle = (req, res) => {
  try {
    //attempt to run code, if no work we send to catch

    res.json(req.params.title);
  } catch (error) {}
};

module.exports = {
  getArticleByTitle,
};
