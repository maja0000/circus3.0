require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

const shows = require('./routes/api/shows');
const messages = require('./routes/api/messages');

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database is connected'))
  .catch((err) => console.log(err));

app.use('/contact', messages);
app.use('/shows', shows);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));
