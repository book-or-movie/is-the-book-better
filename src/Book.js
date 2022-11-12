function Book({ bookArray, setBook, setShowMovie, setShowBook }) {

    const handleClick = ((bookSelection) => {
        setShowMovie(true);
        setShowBook(false);
        setBook(bookSelection);
    })



    return (
        <div className="book-display">
            <h2>Please Select a Book</h2>
            <ul className="book-pick">
                {bookArray.map((bookObj) => {
                    return (
                        <li key={bookObj.id}>
                           
                            <button onClick={() => { handleClick(bookObj) }}> <img src={bookObj.volumeInfo.imageLinks.thumbnail} alt={bookObj.volumeInfo.title} /></button>

                            {/*Image, Author(s), Title, Rating, Date  */}

                            <p className="book-title">{bookObj.volumeInfo.title}</p>
                            <p className="book-author">Author(s):    {bookObj.volumeInfo.authors}</p>
                            <p className="book-rating">Rating: {bookObj.volumeInfo.averageRating*2}</p>
                            <p className="book-release">Release Date: {bookObj.volumeInfo.publishedDate}</p>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Book