const express = require('express');
const router = express.Router();


router.get('/',async (req, res) => {
    res.render('Users/Login');
  });

  module.exports = router
  