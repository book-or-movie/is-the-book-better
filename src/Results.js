//Filter array for movies w/o poster
//Filter array for movies bookObj.volumeInfo.imageLinks is undefined
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Book from "./Book";
import Movie from "./Movie";
import Comparison from "./Comparison";

function Results({ bookArray, movieArray }) {
    const navigate = useNavigate();
    //States to control screens
    const [showBook, setShowBook] = useState(true);
    const [showMovie, setShowMovie] = useState(false);
    const [showComparison, setShowComparison] = useState(false);

    //States to store selections
    const [selectedBook, setSelectedBook] = useState();
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        if (bookArray.length > 0 && movieArray.length > 0) {
            setShowBook(true);
        } else {
            setShowBook(false);
        }
        
    }, [bookArray.length, movieArray.length]);

    console.log(bookArray);
    console.log(movieArray);

    //click to go to home page
    const handleNewSearchClick = () => {
        navigate(`/`);
    };

    //Set book and movie
    const setBook = (book) => {
        setSelectedBook(book);
    };
    const setMovie = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <div className="results">
            <button onClick={handleNewSearchClick}>New Search</button>
            {bookArray.length === 0 ? (
                <p>No books were found......</p>
            ) : movieArray.length === 0 ? (
                <p>No movies were found......</p>
            ) : null}

            {showBook ? (
                <Book
                    bookArray={bookArray}
                    setBook={setBook}
                    setShowMovie={setShowMovie}
                    setShowBook={setShowBook}
                />
            ) : null}

            {showMovie ? (
                <Movie
                    movieArray={movieArray}
                    setMovie={setMovie}
                    setShowMovie={setShowMovie}
                    setShowComparison={setShowComparison}
                />
            ) : null}
            {showComparison ? (
                <Comparison selectedBook={selectedBook} selectedMovie={selectedMovie} />
            ) : null}
        </div>
    );
}

export default Results;
