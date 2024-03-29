const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Zie alle contacten');
});

// @route   POST api/contacts
// @desc    Get all users contacts
// @access  Private
router.post('/', (req, res) => {
  res.send('Contact toevoegen');
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Contact updaten');
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Verwijder contact');
});

module.exports = router;
