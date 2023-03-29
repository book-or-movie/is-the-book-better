import video from './assets/background-video.mov'

const Main = () => {
  return (

    <main> {/* background video for default main route */}
      <video className="main-video" loop playsInline autoPlay muted>
        <source src={video} type="video/mp4" alt="Video compilation of people watching a movie in a cinema and a woman reading a book." />
      </video>
      <div className="main-search-container">
        <h2>Is the book better?</h2>
        <div className="wrapper">
          <p>This app settles the age-old question: which is better? The book or the movie? To find out, simply enter the name of a book below and select the edition you want to compare. Then pick a movie with the same title to see whether the book or movie is superior according to consumer ratings! This app pulls book and movie data from the <a href="https://developers.themoviedb.org/3/getting-started/introduction">Movie Database</a> and <a href="https://developers.google.com/books">Google Books APIs.</a></p>
        </div>
      </div>
    </main>
  )
}

export default Main;