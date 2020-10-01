import React from 'react'
import dhaka1 from "../../Data/img/dhaka1.jpg"
import "./Tour.scss"

const Tour = () => {
    return (
        <section className="Tour">
            <div className="image__container">
                <img className="card__image" src={dhaka1} alt="City Tour"/>
                <span className="close__btn">
                    <i className="fas fa-window-close"></i>
                </span>
            </div>
            <div className="tour__info">
                <h3>City</h3>
                <h4>Name</h4>
                <h5>
                    info {" "}
                    <span>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </section>
    )
}

export default Tour
