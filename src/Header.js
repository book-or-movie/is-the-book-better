import Search from './Search'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <div className="wrapper header-container">
        <Link to='/'>
          <h1>Is the book better?</h1>
        </Link>
      </div>
      <Search />
    </header>

  )
}

export default Header;
