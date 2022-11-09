import React from 'react'

function Movie(props) {


    const handleClick = (() => {
        props.setShowResult(!props.showResults)
    })


    return (
        <div className="movieDisplay">

            <h3>Please select a movie</h3>
            <ul className="moviePick">
                {props.movieArray.map((movieObj) => {
                    return (
                        <li key={movieObj.id}>
                            <img src={`https://image.tmdb.org/t/p/w200/` + movieObj.poster_path} alt={movieObj.title} />
                            <button onClick={handleClick}>Select This Movie</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Movie