require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const indexRouter = require('./routes/index')

app.use('/api/v01',indexRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} port`)
})