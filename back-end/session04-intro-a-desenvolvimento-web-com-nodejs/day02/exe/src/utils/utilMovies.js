const fs = require('fs').promises;

const readerMovies = async () => {
  const dataMovies = await fs.readFile('src/movies.json', 'utf-8');
  return JSON.parse(dataMovies);
};

const writeMovies = async (movie) => {
  const moviesList = await readerMovies();
  const lastOne = moviesList.length - 1;
  moviesList.push({ id: moviesList[lastOne].id + 1, ...movie });
  fs.writeFile('src/movies.json', JSON.stringify(moviesList));
  return movie;
};

const updateMovies = async (id, movie) => {
  const moviesList = await readerMovies();
  const newMoviesList = moviesList.reduce((acc, curr) => {
    if (curr.id === id) {
      curr.movie = movie.movie;
      curr.price = movie.price;
    }  
    return [...acc, curr];
  }, []);
  fs.writeFile('src/movies.json', JSON.stringify(newMoviesList));
  return newMoviesList;
};

const deleteMovies = async (id) => {
  const moviesList = await readerMovies();
  const indexMovie = moviesList.findIndex((m) => m.id === id);
  moviesList.splice(indexMovie, 1);
  fs.writeFile('src/movies.json', JSON.stringify(moviesList));
};

module.exports = { readerMovies, writeMovies, updateMovies, deleteMovies };