import React from 'react'
import tour from "../../Data/img/tour.png"
import "./Navbar.scss"

const Navar = () => {
    return (
        <nav className="Navbar">
            <img src={tour} alt="" className="logo"/>
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
