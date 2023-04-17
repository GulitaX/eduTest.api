const express = require('express');
const app = express();
const port = 3000;
app.get('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.put('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.post('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.delete('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.patch('/*', (req, res) => {
  res.json({message: 'Hello World, from express'});
});
app.listen(port, () => console.log(`Hello world, app is listening on port ${port}!`))