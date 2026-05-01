const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.json());

let notes = [];

// CREATE
app.post('/notes', (req, res) => {
  const note = {
    id: uuidv4(),
    title: req.body.title,
    author: req.body.author,
    datetime: new Date(),
    body: req.body.body,
    classification: req.body.classification
  };
  notes.push(note);
  res.status(201).json(note);
});

// READ ALL
app.get('/notes', (req, res) => {
  res.json(notes);
});

// READ ONE
app.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).send('Note not found');
  res.json(note);
});

// UPDATE
app.put('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).send('Note not found');

  note.title = req.body.title || note.title;
  note.author = req.body.author || note.author;
  note.body = req.body.body || note.body;
  note.classification = req.body.classification || note.classification;

  res.json(note);
});

// DELETE
app.delete('/notes/:id', (req, res) => {
  notes = notes.filter(n => n.id !== req.params.id);
  res.send('Note deleted');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
