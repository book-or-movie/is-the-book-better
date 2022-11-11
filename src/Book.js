import React from 'react'

function Book(props) {

    const handleClick = ((bookSelection) => {
        props.setShowMovie(!props.showMovie);
        props.setShowBook(false)
        props.setBook(bookSelection)
    })




    return (
        <div className="bookDisplay">
            {
                props.bookArray.length === 0
                    ? <>
                        <h3>No books have been found</h3>
                        <p>Try a different query</p>
                    </>
                    : <h3>Please select a book</h3>
            }

            <ul className="bookPick">
                {props.bookArray.map((bookObj) => {
                    return (
                        <li key={bookObj.id}>
                            <img src={bookObj.volumeInfo.imageLinks.thumbnail} alt={bookObj.volumeInfo.title} />
                            <button onClick={() => { handleClick(bookObj) }}>Select This Book</button>

                            {/*Image, Author(s), Title, subtitle, Rating, Date  */}

                            <p className="book-author">{bookObj.volumeInfo.title}</p>
                            <p className="book-title"></p>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Book