import React from 'react';
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
  // const API_KEY_MOVIE = process.env.MOVIE_API_KEY
  let showMessage = false


useEffect(() => {
  async function bookPromise () {
  const bookObject = await  axios({
    url: "https://www.googleapis.com/books/v1/volumes/",
    params: {
      q: searchQuery,
      key: API_KEY_BOOKS,
      language: "en",
    },
  })
  return bookObject
 }
 async function moviePromise () {
  const movieData = await axios({
    url: `https://api.themoviedb.org/3/search/movie/`,
    params: {
      api_key: "372d3f4f5198c56ab56f69a5848e02d3",
      query: searchQuery,
    },
  })
  return movieData
 }

Promise.all([ bookPromise(),moviePromise() ]) 
.then((values) => {
  console.log(values, "hey")
  const newBookState = values[0].data.items.filter((book) => {
    if(!book.volumeInfo.averageRating){
      book.volumeInfo.averageRating = 0
    }
    return book.volumeInfo.title.toLowerCase() === searchQuery.toLowerCase()
  })
  setBookData(newBookState)
  const newMovieState = values[1].data.results.filter((movie) => {
    return movie.title.toLowerCase() === searchQuery.toLowerCase()
  })
  setMovieData(newMovieState)
  showMessage = true
})

},[])







  // useEffect(() => {
  //   axios({
  //     url: "https://www.googleapis.com/books/v1/volumes/",
  //     params: {
  //       q: searchQuery,
  //       key: API_KEY_BOOKS,
  //       language: "en",
  //     },
  //   }).then((response) => {
  //     const newBookState = response.data.items.filter((book) => {
  //       if(!book.volumeInfo.averageRating){
  //         book.volumeInfo.averageRating = 0
  //       }
  //       return book.volumeInfo.title.toLowerCase() === searchQuery.toLowerCase()
  //     })
  //     setBookData(newBookState)
  //   }).catch((error => {
  //     console.log('error!');
  //   }))
  // }, [API_KEY_BOOKS, searchQuery])

  // useEffect(() => {
  //   axios({
  //     url: `https://api.themoviedb.org/3/search/movie/`,
  //     params: {
  //       api_key: "372d3f4f5198c56ab56f69a5848e02d3",
  //       query: searchQuery,
  //     },
  //   })
  //     .then((response) => {
  //       const newMovieState = response.data.results.filter((movie) => {
  //         return movie.title.toLowerCase() === searchQuery.toLowerCase()
  //       })
  //       setMovieData(newMovieState)
  //     })
  //     .catch((error) => {
  //       console.log("error!")
  //     })
  // }, [searchQuery])





  return (
    <section className="searchResults">
      <Results bookArray={bookData} movieArray={movieData} showMessage={showMessage}/>
    </section>
  )
}

export default SearchResults