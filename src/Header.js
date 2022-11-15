import Search from './Search'


const Header = () => {
  return (
    <header>
      <div className="wrapper header-container">
        <h1>Is the book better?</h1>
      </div>
      <div className='header-search'>
        <Search />
      </div>
    </header>

  )
}

export default Header;
