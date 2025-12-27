const express = require('express');
const todoRouter = require('./routes/todo.router');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/todo', todoRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
