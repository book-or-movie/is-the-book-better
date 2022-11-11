// import { useEffect } from "react"


const Comparison = (props) => {





    return (
        <>
            {
                ((props.selectedBook.volumeInfo.averageRating * 2) > props.selectedMovie.vote_average)
                    ? <h2>The Book is better</h2>
                    : ((props.selectedBook.volumeInfo.averageRating * 2) < props.selectedMovie.vote_average)
                        ? <h2>The Movie is better</h2>
                        : <h2>It's a tie</h2>
            }

            <div className="book">
                {/* Image, Rating, Title, Author(s) */}
            </div>

            <div className="movie">
            {/* Image, Rating, Title, Year, Director */}
            </div>


        </>
    )
}

export default Comparison




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