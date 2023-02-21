import { Link, NavLink } from "react-router-dom";
import "./nav.css"


const Nav=()=>{
    return(
        <nav className="nav">
            <Link to="/" className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="site logo" />
            </Link>
            <ul className="list">
                <li className="item">
                    <NavLink className="navlink" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink className="navlink" to="/movie">
                        Popular
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/up-coming">
                        Up Coming
                    </NavLink>
                </li>
            </ul>
            <input type="search" placeholder="Search.." className="nav-input"/>
        </nav>
    )
}

export default Nav;