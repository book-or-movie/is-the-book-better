import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Book from "./Book";
import Movie from "./Movie";
import Comparison from "./Comparison";

function Results({ bookArray, movieArray, showMessage }) {
    const navigate = useNavigate();
    //States to control screens
    const [showBook, setShowBook] = useState(true);
    const [showMovie, setShowMovie] = useState(false);
    const [showComparison, setShowComparison] = useState(false);

    //States to store selections
    const [selectedBook, setSelectedBook] = useState();
    const [selectedMovie, setSelectedMovie] = useState();

    //useEffect checks if search returns any movies or books. If none for both, hide the books and movies. Code continues to return area which will render either "no books" or "no movies"
    useEffect(() => {
        if (bookArray.length > 0 && movieArray.length > 0) {
            setShowBook(true);
        } else {
            setShowBook(false);
        }

    }, [bookArray.length, movieArray.length]);

    //click to go to home page
    // const handleNewSearchClick = () => {
    //     navigate(`/`);
    // };

    return (
        <section className="comparison">
            <div className="wrapper">

                <div className="result-container">
                    {/* <button onClick={handleNewSearchClick} className="new-search-btn">New Search</button> */}
                    {bookArray.length === 0 && showMessage ? (
                        <h6>No books were found, Please try another Title......</h6>
                    ) : movieArray.length === 0 && showMessage ? (
                        <h6>No movies were found, Please try another Title.......</h6>
                    ) : null}

                    {showBook ? (
                        <Book
                            bookArray={bookArray}
                            setBook={setSelectedBook}
                            setShowMovie={setShowMovie}
                            setShowBook={setShowBook}
                        />
                    ) : null}

                    {showMovie ? (
                        <Movie
                            movieArray={movieArray}
                            setMovie={setSelectedMovie}
                            setShowMovie={setShowMovie}
                            setShowComparison={setShowComparison}
                        />
                    ) : null}
                    {showComparison ? (
                        <Comparison selectedBook={selectedBook} selectedMovie={selectedMovie} />
                    ) : null}
                </div> {/* results-container div end */}
            </div> {/* wrapper div end */}
        </section>
    );
}

export default Results;
