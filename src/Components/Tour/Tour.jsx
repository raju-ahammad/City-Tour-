import React from 'react'
import "./Tour.scss"

const Tour = ({ tour, handleShowInfo, showInfo, removeTour }) => {
    return (
        <section className="Tour">
            <div className="image__container">
                <img className="card__image" src={tour.img} alt="City Tour"/>
                <span className="close__btn" onClick={removeTour}>
                    <i className="fas fa-window-close"></i>
                </span>
            </div>
            <div className="tour__info">
                <h3> {tour.city} </h3>
                <h4> {tour.name} </h4>
                <h5>
                    info 
                    <span onClick={handleShowInfo}>
                        <i className="fas fa-caret-square-down"></i>
                    </span>
                </h5>
                { showInfo  ? <p> {tour.info} </p>: <p></p> }
                
            </div>
        </section>
    )
}

export default Tour
