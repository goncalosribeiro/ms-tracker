const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

require('dotenv').config()

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', async (req, res) => {
  let listType = "popular";
  let page = 1;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.MDB_API_KEY}&page=${page}`);
    const json = await response.json();
    const results = await json.results;
    movieList = results.map(item => {
      return {
        "title": item.title,
        "poster": item.poster_path,
        "id": item.id,
        "rate": item.vote_average,
        "ratePercent": item.vote_average * 10,
        "year": item.release_date.substring(0, 4)
      };
    });
    res.render('main', { movieItems: movieList })
  } catch (error) {
    console.log("erro 2", error);
  };
});

app.get('/:listType/:page', async (req, res) => {
  movieList = [];
  var page = req.params.page;
  var listType = req.params.listType;
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${listType}?api_key=${process.env.MDB_API_KEY}&page=${page}`);
    const json = await response.json();
    const results = await json.results;
    movieList = results.map(item => {
      return {
        "title": item.title,
        "poster": item.poster_path,
        "id": item.id,
        "rate": item.vote_average,
        "ratePercent": item.vote_average * 10,
        "year": item.release_date.substring(0, 4)
      };
    });
    res.render('main', { movieItems: movieList })
  } catch (error) {
    console.log("erro 2", error);
  };
});

app.listen(process.env.PORT || 3001, function () {
  console.log('server started on port 3000');
});