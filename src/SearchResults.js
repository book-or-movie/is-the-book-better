import React from 'react';
import Search from './Search';
import { useEffect, useState, useParams } from 'react';
import axios from 'axios';

const SearchResults = () => {
  const [movieData, setMovieData] = useState({})
  const [bookData, setBookData] = useState({})
	const urlParamsValue = useParams()
  const API_KEY_BOOKS = process.env.BOOKS_API_KEY
  const API_KEY_MOVIE = process.env.MOVIE_API_KEY

	useEffect(() => {
		axios({
			url: `https://api.themoviedb.org/3/search/movie/`,
			params: {
				api_key: API_KEY_MOVIE,
				query: urlParamsValue.title,
			},
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
				key: API_KEY_BOOKS,
				language: "en",
			},
		}).then((response) => {
			const newBookState = response.data.items.filter((book) => {
				return book.volumeInfo.title.toLowerCase() === urlParamsValue.title.toLowerCase()
			})
			console.log(newBookState)
		})
  }, [])
  

  return (
		<section className="searchResults">
			<Search />
			<div className="searchResults">
				<div className="movieDisplay">
					<ul className="moviePick">
						{movieData.map((movieObj) => {
							return (
								<li key={movieObj.id}>
									<img src={movieObj.posters} alt={movieObj.title} />
								</li>
							)
						})}
					</ul>
				</div>
				<div className="bookDisplay">
					<ul className="bookPick">
						{bookData.map((bookObj) => {
							return (
								<li key={bookObj.id}>
									<img src={bookObj.posters} alt={bookObj.title} />
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
  )
}

export default SearchResults