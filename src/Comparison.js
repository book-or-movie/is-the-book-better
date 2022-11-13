const Comparison = ({ selectedBook, selectedMovie }) => {
  const bookRating = selectedBook.volumeInfo.averageRating * 2;
  const movieRating = selectedMovie.vote_average;

  return (
    <section className="comparison">
      <div className="wrapper">

        <div className="decision">
          {
            bookRating > movieRating
              ? <h3>The Book is better</h3>
              : bookRating < movieRating
                ? <h3>The Movie is better</h3>
                : <h3>It's a tie</h3>
          }
        </div>

        {/* the below code assigns book-won class only if book rating is superior or tie*/}
        <div className={`book-container ${bookRating >= movieRating ? "book-won" : ""} `}>
          <div className="book-image-container">
            <img src={selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.volumeInfo.title} />
            <p>Book Title: {selectedBook.volumeInfo.title}</p>
            <p>Author: {selectedBook.volumeInfo.authors}</p>
            <p>Average Reader Rating: {bookRating}/10</p>
            <p>Published Date: {selectedBook.volumeInfo.publishedDate}</p>
          </div>
        </div>

        {/* the below code assigns movie-won class only if movie rating is superior pr tie*/}
        <div className={`movie-container ${bookRating <= movieRating ? "movie-won" : ""}`}>
          <div className="movie-image-container">
            <img src={`https://image.tmdb.org/t/p/w200/` + selectedMovie.poster_path} alt={selectedMovie.title} />
            <p>Movie Title: {selectedMovie.title}</p>
            <p>Released: {selectedMovie.release_date}</p>
            <p>Average Viewer Rating: {movieRating}/10</p>
          </div>
        </div>

      </div> {/* wrapper div end */}
    </section>
  )
}

export default Comparison;
