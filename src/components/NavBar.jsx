import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">RSC</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#area-interesse">Areas de Interesse</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
