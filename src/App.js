// THIS IS THE LATEST VERSION AS OF 5 PM. NOV. 15 2022

import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import SearchResults from "./SearchResults";
import Footer from "./Footer";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search/:title" element={< SearchResults />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
