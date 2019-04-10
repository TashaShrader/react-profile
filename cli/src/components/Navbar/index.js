import React from "react";
import "./style.css";
function Navbar() {
    return(
    <nav className="navbar nav navbar-expand-lg navbar-light">
    <a className="navbar-brand">
        <h1>Tasha Shrader</h1>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="/aboutme">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/TashaShrader">Github</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/tasha-shrader-9041b3170/">LinkedIn</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://docs.google.com/document/d/1fTQ-EM9co5IWiGa0s_ChO-lDLdqlAGwP9nxbJClCpq4/edit?usp=sharing">Resume</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>

        </ul>
    </div>
</nav>
    )
}
export default Navbar;