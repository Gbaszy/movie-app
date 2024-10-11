import { Link } from "react-router-dom";
import "./Home";
import "./About";
import "./Contact"
import "./Navbar.css"

function Navbar() {
  return (
    <div  className="nav">
      <nav>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
