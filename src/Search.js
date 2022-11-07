import React from 'react'
import axios from "axios";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {

  const [movieData, setMovieData] = useState({});
  const [bookData, setBookData] = useState({});

  const urlParamsValue = useParams();

  useEffect(() => {
    axios({
      url: `https://api.themoviedb.org/3/search/movie/`,
      params: {
        api_key: "47da9671165d0b0ea4978d79aec9edce",
        query: urlParamsValue.title,
      }
    }).then((response) => {
      const newMovieState = response.data.results.filter((movie) => {
        return movie.title.toLowerCase() === urlParamsValue.title.toLowerCase()
      })
      console.log(newMovieState)
    }, [])
  })

  useEffect(() => {
    axios({
      url: "https://www.googleapis.com/books/v1/volumes?",
      params: {
        q: urlParamsValue.title,
        key: "AIzaSyDCEbB_2pq9kGnJgq1tJ8Z0gzoR5LgN9gQ",
        language: "en",
      }
    })
      .then((response) => {
        const newBookState = response.data.items.filter((book) => {
          return book.volumeInfo.title.toLowerCase() === urlParamsValue.title.toLowerCase()
        })
        console.log(newBookState)
      })
  }, [])






  return (
    <section className="Search">
      <div>Search</div>
    </section>
  )

}

export default Search;