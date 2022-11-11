import React from 'react';
import Search from './Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Results from './Results';

const SearchResults = () => {
  const [movieData, setMovieData] = useState([])
  const [bookData, setBookData] = useState([])
  const urlParamsValue = useParams()
  const searchQuery = urlParamsValue.title
  const API_KEY_BOOKS = process.env.BOOKS_API_KEY
  const API_KEY_MOVIE = process.env.MOVIE_API_KEY

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/search/movie/`,
      params: {
        api_key: "372d3f4f5198c56ab56f69a5848e02d3",
        query: searchQuery,

      },
    })
      .then((response) => {
        const newMovieState = response.data.results.filter((movie) => {
          return movie.title.toLowerCase() === searchQuery.toLowerCase()
        })
        setMovieData(newMovieState)
      })
      .catch((error) => {
        console.log("error!")
      })
  }, [searchQuery])

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes/",
      params: {
        q: searchQuery,
        key: API_KEY_BOOKS,
        language: "en",
      },
    }).then((response) => {
      const newBookState = response.data.items.filter((book) => {
        return book.volumeInfo.title.toLowerCase() === searchQuery.toLowerCase()
      })
      setBookData(newBookState)
    }).catch((error => {
      console.log('error!');
    }))
  }, [searchQuery])

  const selectedMovie = (movie) => {
    setMovieData(movie)
  }

  const selectedBook = (book) => {
    setBookData(book)
  }

  return (
    <section className="searchResults">
      <Results bookArray={bookData} setBook={selectedBook} movieArray={movieData} setMovie={selectedMovie} />
    </section>
  )
}

export default SearchResults