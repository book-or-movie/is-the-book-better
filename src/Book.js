import React from 'react'

function Book(props) {

    const handleClick = ((bookSelection) => {
        props.setShowMovie(!props.showMovie);
        props.setShowBook(false)
        props.setBook(bookSelection)
    })




    return (
        <div className="bookDisplay">
            
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