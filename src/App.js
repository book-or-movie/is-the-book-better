//Packages installed so far:  Sass, Axios, react-router-dom
import Header from "./Header";

import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="App">
      <Header />



      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:title" element={< SearchResults />} />
        {/* <Route path="/search/bookchoice" element={<Book/>}/> */}
        {/* <Route path="/search/moviechoice" element={<Movie/>}/> */}
        {/* <Route path="/search/results" element={<Results/>}/> */}

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
