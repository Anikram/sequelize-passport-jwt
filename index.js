const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')
const PORT = 5000;

app.use('/',indexRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT} port`)
})