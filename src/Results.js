import React from 'react'
import { useState } from 'react';

import Book from './Book';
import Movie from './Movie';

function Results({ bookArray, setBook, movieArray, setMovie }) {

    const [showMovie, setShowMovie] = useState(false);

    

    //Filter array for movies w/o poster
    //Filter array for movies bookObj.volumeInfo.imageLinks is undefined

    // console.log(bookArray);
    // console.log(movieArray);

    return (

        <div className="results">
            {showMovie
                ? <Movie movieArray={movieArray} setMovie={setMovie} />
                : <Book bookArray={bookArray} setBook={setBook} setShowMovie={setShowMovie} showMovie={showMovie} />
            }
        </div>
    )
}

export default Results