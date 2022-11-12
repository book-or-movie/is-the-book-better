import { useEffect } from "react"


const Comparison = (props) => {

  const bookRating = props.selectedBook.volumeInfo.averageRating * 2;
  const movieRating = props.selectedMovie.vote_average;
  let bookWin = "";
  let movieWin ="";
  
  //if/else statement adds CSS class to the winning book, movie or both 

    if (bookRating > movieRating) {  
      bookWin = "book-won"
    } else if ( bookRating < movieRating) {
      movieWin = "movie-won";
    } else {
      bookWin = "book-won";
      movieWin = "movie-won";
    }

    console.log(props)
  
    return (
        <>
            {
                bookRating > movieRating
                    ? <h2>The Book is better</h2>
                    : bookRating < movieRating
                        ? <h2>The Movie is better</h2>
                        : <h2>It's a tie</h2>
            }

            <div className={`book ${bookWin}`}>
              <div className="book-image-container">
                <img src={props.selectedBook.volumeInfo.imageLinks.thumbnail} alt={props.selectedBook.volumeInfo.title} />
                <p>Book Title: {props.selectedBook.volumeInfo.title}</p>
                <p>Author: {props.selectedBook.volumeInfo.authors}</p>
                <p>Average Reader Rating: {props.selectedBook.volumeInfo.averageRating}</p>
                <p>Published Date: {props.selectedBook.volumeInfo.publishedDate}</p>
              </div>
            </div>

            <div className={`movie ${movieWin}`}>
              <div className="movie-image-container">
                <img src={`https://image.tmdb.org/t/p/w200/` + props.selectedMovie.poster_path} alt={props.selectedMovie.title} />
                <p>Movie Title: {props.selectedMovie.title}</p>
                <p>Released: {props.selectedMovie.release_date}</p>
                <p>Average Viewer Rating: {props.selectedMovie.vote_average}</p>
              </div>
            </div>
        </>
    )
}

export default Comparison;




// if (selectedMovie) {
//     const bookRating = selectedBook.volumeInfo.averageRating * 2;
//     const movieRating = selectedMovie.vote_average;
//     if (bookRating > movieRating) {
//         newBookObj.winner = true;
//         setSelectedBook(newBookObj);
//     } else if (bookRating < movieRating) {
//         newMovieObj.winner = true;
//         setSelectedMovie(newMovieObj)
//     } else {
//         newBookObj.winner = true;
//         newMovieObj.winner = true;
//         setSelectedBook(newBookObj);
//         setSelectedMovie(newMovieObj)
//     }
// }