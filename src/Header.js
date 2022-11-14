import logo from './assets/pexels-rikka-ameboshi-3358707.jpg';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <h1>Is the Book Better?</h1>
        <img src={logo} className="logo" alt='Logo' />
      </div>
    </header>

  )
}

export default Header;
