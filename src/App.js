//Packages installed so far:  Sass, Axios, react-router-dom

import { Link, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Search from "./Search";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={< SearchResults/>} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
