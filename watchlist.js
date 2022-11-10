document.addEventListener('DOMContentLoaded', function () {
    const watchlistJSON = localStorage.getItem('watchlist');
    const watchlist = JSON.parse(watchlistJSON);
    document.getElementsByClassName("movie-container")[0].innerHTML = renderMovie(watchlist);
});


const renderMovie = (movieArray) => {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return ` <div class="movie-list-container">
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