import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/index" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    </ul>
                </div>
            </nav>
    );
}

export default Header;