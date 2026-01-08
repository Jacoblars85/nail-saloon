const express = require('express');
const scheduleRouter = require('./routes/schedule.router');
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api/schedule', scheduleRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
