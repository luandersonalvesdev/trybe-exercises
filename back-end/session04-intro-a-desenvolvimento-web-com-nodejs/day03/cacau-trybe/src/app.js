const express = require('express');
const { getAllChocolates, getChocolateById, getChocolatesByBrand, uptadeChocolate } = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolates();
  const total = chocolates.length;
  res.status(200).json({ totalChocolates: total });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getAllChocolates();
  const filtered = chocolates.filter((cho) => cho.name.toLowerCase().includes(name.toLowerCase()));
  if(!filtered.length) res.status(404).json(filtered)
  res.status(200).json(filtered);
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updated = await uptadeChocolate(Number(id), name, brandId);
  if(!updated) res.status(404).json({ "message": "chocolate not found" });
  res.status(200).json({chocolate: { id: Number(id), name, brandId }});
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;