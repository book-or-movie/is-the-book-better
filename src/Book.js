import React from 'react'
import { useState } from 'react'

function Book(props) {

    ///On click re route to /search/movie/:movieObj
    const [selectedBook, setSelectedBook] = useState()

    const handleClick = ((bookSelection) => {
        props.setShowMovie(!props.showMovie)
        setSelectedBook(bookSelection)
        console.log('book selected is:', bookSelection.volumeInfo.title);
    })

    


    return (
        <div className="bookDisplay">
            <h3>Please select a book</h3>

            <ul className="bookPick">
                {props.bookArray.map((bookObj) => {
                    return (
                        <li key={bookObj.id}>
                            <img src={bookObj.volumeInfo.imageLinks.thumbnail} alt={bookObj.title} />
                            <button onClick={() => {handleClick(bookObj)} }>Select This Book</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Book