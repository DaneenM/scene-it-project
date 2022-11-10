// const arrows = document.querySelectorAll(".arrow");
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains("add-button")) {
            const movieID = event.target.dataset.imdbID;
            saveToWatchList(movieID);
        }
    })
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains("add-button")) {
            const movieID = event.target.dataset.imdbid;
            saveToWatchlist(movieID);
        }
    })
});

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    await fetch("https://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
        .then(async function (response) {
            return await response.json();
        })
        .then(function (data) {
            document.getElementsByClassName("movie-list-container")[0].innerHTML = renderMovie(data.Search);
            movieData = data.Search;
        });
})

const renderMovie = (movieArray) => {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie-list-container">
        <div class="movie-list-wrapper">
            <div class="movie-list">
                <div class="movie-list-item">
                    <img class="movie-list-item-img" src="${currentMovie.Poster}" alt="">
                    <span class="movie-list-item-title">${currentMovie.Title}<h6>${currentMovie.Year}</span>
                    <button class="movie-list-item-button">Add!</button>
                </div>`
    })
    return movieHtmlArray.join('');
}

const saveToWatchlist = (movieID) => {
    const movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == movieID;
    })
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON);
}