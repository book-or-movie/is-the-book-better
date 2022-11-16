import Search from './Search'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to='/'>
          <h1>Is the book better?</h1>
        </Link>
      </div>
      <div className='header-search'>
        <Search />
      </div>
    </header>

  )
}

export default Header;
