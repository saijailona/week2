'use strict';
// catRoute
const express = require('express');
const { body, validationResult } = require('express-validator');
const multer = require('multer');
const fileFilter = (req, file, cb) => {
  if(file.mimetype.includes('image')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ dest: './uploads/', fileFilter });

const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_put,
  cat_delete,
} = require('../controllers/catController');
const router = express.Router();

router
  .route('/')
  .get(cat_list_get)
  .post(upload.single('cat'), 
  body('name').notEmpty().escape(), cat_post)
  body('birthdate').isDate(),
  body('weight').isNumeric(),
  cat_put;

router
.route('/:id')
.get(cat_get)
.delete(cat_delete)
.put(cat_put);

module.exports = router;
