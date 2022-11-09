import React from 'react'

import Book from './Book';
import Movie from './Movie';

function Results({bookArray, setBook, movieArray, setMovie}) {

    //Filter array for movies w/o poster
    //Filter array for movies bookObj.volumeInfo.imageLinks is undefined

    console.log(bookArray);
    console.log(movieArray);

  return (

    <div className="results">
        <Book bookArray={bookArray} setBook={setBook}/>
        {/* <Movie movieArray={movieArray} setMovie={setMovie}/> */}
    </div>
  )
}

export default Results