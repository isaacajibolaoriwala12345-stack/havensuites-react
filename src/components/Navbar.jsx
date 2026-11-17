import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        HAVEN<span>SUITES</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/rooms" className="nav-button">
        Book a Room
      </Link>
    </nav>
  );
}

export default Navbar;
