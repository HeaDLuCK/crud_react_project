import { Link } from "react-router-dom";
import './header.css'

// Header to Navigate  between ponel and blogs
const Header = () => {
    return (
        <header className="nav-bar">
            <div className="container head">
                <div className="logo"><Link to="/blog"> LIKE</Link> </div>
                <nav>
                    <ul>
                        <li> <Link to="/blog">BLOGS</Link> </li>
                        <li><Link to="/panel">PANEL</Link></li>
                    </ul>

                </nav>
            </div>
        </header>
    )
}
export default Header;