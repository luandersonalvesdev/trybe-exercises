const express = require('express');
const { readerMovies, writeMovies, updateMovies, deleteMovies } = require('./utils/utilMovies');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const moviesList = await readerMovies();
  const film = moviesList.find(({ id: idFilm }) => idFilm === Number(id));
  if (!film.id) res.status(404).json({ menssage: 'filme não encontrado' });
  res.status(200).json({ film });
});

app.get('/movies/', async (req, res) => {
  const moviesList = await readerMovies();
  res.status(200).json(moviesList);
});

app.post('/movies/', (req, res) => {
  const movie = req.body;
  writeMovies(movie);
  res.status(200).json(movie);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const newMovieList = await updateMovies(Number(id), movie);
  res.status(200).json(newMovieList);
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  deleteMovies(Number(id));
  res.status(200).json({ menssage: 'film deleted' });
});

module.exports = app;