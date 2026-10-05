import { NavLink } from "react-router-dom";
 
function Navbar() {
    return (
    <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
    </nav>
    )
}
 
export default Navbar