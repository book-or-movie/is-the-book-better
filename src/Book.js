import React from 'react'

function Book(props) {

///On click re route to /search/movie/:movieObj

    return (
        <div className="bookDisplay">
            <h3>Please select a book</h3>

            <ul className="bookPick">
                {props.bookArray.map((bookObj) => {
                    return (
                        <li key={bookObj.id}>
                            <img src={bookObj.volumeInfo.imageLinks.thumbnail} alt={bookObj.title} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Book