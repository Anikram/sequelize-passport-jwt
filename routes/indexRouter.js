const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
  try {
    res.send('index')
  } catch (err) {
    console.error(err.message)
    res.status(400).send(err)
  }
})

module.exports = router;