import logo from "../logo.svg";
import "../styles/Header.css";
import { NavLink, Link} from "react-router-dom";

function Header() {
  return (
    <>
    <div className="Header">
        <img src={logo} alt="logo" />
      <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/About">ABOUT</NavLink>
      <NavLink to="/Contact">CONTACT</NavLink>
      <NavLink to="/Services">SERVICES</NavLink>
      </nav>
      <Link to="/Signup">
      <button>Get Started</button>
      </Link>
    </div>
    </>
  );
}

export default Header