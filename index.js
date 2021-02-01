require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')

app.use('/',indexRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} port`)
})