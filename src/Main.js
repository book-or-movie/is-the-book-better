import video from './assets/background-video.mov'
// import logo from './assets/logo.svg';


const Main = () => {
  return (
    <main>

      <video className="main-video" loop playsInline autoPlay muted>
        <source src={video} type="video/mp4" alt="A woman with a Chanel purse walks towards a lighthouse in the middle of a frozen lake." />
      </video>

      <div className="main-search-container">
        <div className="wrapper">
          <p>This app settles the age-old question: which was better? The book or the movie? To find out, simply enter the name of a book below and select the edition you want to compare. Then pick a movie with the same title to see whether the book or movie is superior according to consumer ratings! This app pulls book and movie data from the <a href="https://developers.themoviedb.org/3/getting-started/introduction">Movie Database</a> and <a href="https://developers.google.com/books">Google Books APIs.</a></p>
        </div>


      </div>


    </main>
  )
}

export default Main;