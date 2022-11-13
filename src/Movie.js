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
                                <button onClick={() => { handleClick(movieObj) }} className="select-movie-btn"><img src={movieObj.poster_path} alt={movieObj.title} /></button>

                                <p>Movie Title: {movieObj.title}</p>
                                <p>Released: {movieObj.release_date}</p>
                                <p>Average Viewer Rating: {movieObj.vote_average}/10</p>
                            </li>
                        )
                    })}
                </ul>
            </div> {/* div wrapper end */}
        </section>
    )
}

export default Movie;