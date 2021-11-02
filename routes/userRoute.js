'use strict';
// userRoute

const express = require('express');
const { user_list_get, user_get, user_post } = require('../controllers/userController');
const router = express.Router();

router.get('/', user_list_get);
router.get('/:id', user_get);
router.post('/', user_post);

router.get('/:id', (req, res) => {
    res.send('You requested a user whose id is ' + req.params.id)
  });

router.post('/', (req, res) => {
    res.send('From this endpoint you can get users. ' + req.params.id)
  });

router.put('/', (req, res) => {
    res.send('From this endpoint you can get users.' + req.params.id)
  });

router.delete('/', (req, res) => {
    res.send('From this endpoint you can get users. ' + req.params.id)
  });

  module.exports = router;
