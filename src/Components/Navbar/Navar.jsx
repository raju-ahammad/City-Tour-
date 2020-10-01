import React from 'react'
import "./Navbar.scss"

const Navar = () => {
    return (
        <nav className="Navbar">
            <h4 className="logo">City Tour</h4>
            <ul className="nav__links">
                <li>
                    <a className="nav__link" href="#">Home</a>
                </li>
                <li>
                    <a className="nav__link" href="#">About</a>
                </li>
                <li>
                    <a className="nav__link" href="#">Tour</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navar
