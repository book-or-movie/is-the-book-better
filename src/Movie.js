function Movie({ movieArray, setMovie, setShowMovie, setShowComparison }) {

    const handleClick = ((movieSelection) => {
        setMovie(movieSelection);
        setShowMovie(false);
        setShowComparison(true);
    })

    return (
        <section className="movie-display">
          <div className="wrapper">
            <h2>Please select a movie</h2>
            <ul className="movie-pick">
                {movieArray.map((movieObj) => {
                    return (
                        <li key={movieObj.id}>

                            <p>Movie Title: {movieObj.title}</p>
                            <p>Released: {movieObj.release_date}</p>
                            <p>Average Viewer Rating: {movieObj.vote_average}/10</p>
                            <button onClick={() => { handleClick(movieObj) }}><img src={`https://image.tmdb.org/t/p/w200/` + movieObj.poster_path} alt={movieObj.title} /></button>
                        </li>
                    )
                })}
            </ul>
          </div> {/* div wrapper end */}
        </section>
    )
}

export default Movie;