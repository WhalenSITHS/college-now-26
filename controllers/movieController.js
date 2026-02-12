exports.showMovies = (req, res) => {
  const movies = ["Star Wars", "Bill and Ted", "Next To Normal"];
  try {
    res.json(movies);
  } catch (error) {
    console.log(error);
  }
};
exports.getAllPokemon = async (req, res) => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
    );
    const data = await response.json();
    res.status(200).json(data.results);
  } catch (error) {
    res.status(500).json({ message: "Faield to fetch Pokemen and Pokewomen" });
  }
};
