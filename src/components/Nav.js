import { Link } from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar">
            {
                /*ethnus on left home about blog contact on right*/}
                <Link to="/" class="navbar-brand">Ethnus</Link>
                <div class="nav">
                    <Link to="/home" class="nav-link">Home</Link>
                    <Link to="/about" class="nav-link">About</Link>
                    <Link to="/blog" class="nav-link">Blog</Link>
                    <Link to="#" class="nav-link">Contact</Link>
                </div>
            
        </nav>
        // a href="/#/home" <Link to="/home"
    )
}

export default Nav;