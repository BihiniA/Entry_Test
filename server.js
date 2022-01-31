const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const recipeRoutes = require("./routes/recipes");

//App middleware
app.use(bodyParser.json());
app.use(cors());

//Route middleware
app.use(recipeRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Amara00:Amara98@practicle.j4je7.mongodb.net/Practicle?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => (
    console.log('DB connected successfully')
))
.catch((err) => console.log("DB connection error", err));

app.listen(PORT, ()  => {
    console.log(`App is running on ${PORT}`)
});