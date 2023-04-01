const tmdbKey = 'fe80914ba8b72ae4f0ae9587c0c5d9c2';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list'
  let requestParams = '?api_key=' + tmdbKey
  let urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json()
      const genres = jsonResponse.genres
      return genres
    }
  }
  catch(error) {
    console.log(error)
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie'
  let requestParams = '?api_key=' + tmdbKey + "&with_genres=" + selectedGenre
  let urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const jsonResponse = await response.json()
      let movies= jsonResponse.results
      return movies
    }
  }
  catch(error) {
    console.log(error)
  }
  
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id
  const endpoint = `/movie/${movieId}`
  let queryParams = '?api_key=' + tmdbKey
  let urlToFetch = tmdbBaseUrl + endpoint + queryParams
  try {
    const response = await fetch(urlToFetch)
    if (response.ok) {
      const movieInfo = await response.json()
      return movieInfo
    }
  }
  catch(error) {
    console.log(error)
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  let movies = await getMovies()
  let randomMovie = getRandomMovie(movies)
  let info = await getMovieInfo(randomMovie)
  displayMovie(info)
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;