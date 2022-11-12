import Search from './Search'

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <p>This app settles the age-old question: which was better? The book or the movie? To find out, simply enter the name of a book below and select the edition you want to compare. Then pick a movie with the same title to see whether the book or movie is superior according to consumer ratings!</p>
      </div> {/* div wrapper end */}
      <Search />
    </main>
  )
}

export default Main;