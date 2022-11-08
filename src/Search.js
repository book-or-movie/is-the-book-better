import React from 'react'
import { useNavigate} from "react-router-dom";
import { useState} from "react";

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
    <div className="search-section">
      <form>
        <label htmlFor="searchField">
          <span className="sr-only">Enter street number</span>
        </label>
        <input type="text" id="searchField" name="bookTitle" placeholder="Search a book title" required onChange={handleInput} value={input}></input>
        <button onClick={handleFormSubmit}>Search</button>
      </form>
    </div>
  )

}

export default Search;