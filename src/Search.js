import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  //Function to handle the controlled input
  const handleInput = (e) => {
    setInput(e.target.value);
  }

  //Function to handle the form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${input}`)
    setInput("");
  }

  return (
    <section className="search-field">
      {/* <div className="wrapper"> */}
      {/* <div className="search-field-container"> */}
      <form className='search-form' onSubmit={handleFormSubmit}>
        <label htmlFor="search-field">
          <span className="sr-only">Search for a book</span>
        </label>
        <input type="text" id="search-field" name="bookTitle" placeholder="Search a book title" required onChange={handleInput} value={input} className="search-input"></input>
        <button className="search-submit-btn">Search</button>
      </form>
      {/* </div>search-field-container div end */}
      {/* </div> wrapper div end */}
    </section>
  )

}

export default Search;