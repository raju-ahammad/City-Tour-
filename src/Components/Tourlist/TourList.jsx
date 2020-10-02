import React from 'react'
import Tour from '../Tour/Tour'
import "./TourLIst.scss"
const TourList = ({ tourData, handleShowInfo, showInfo, removeTour }) => {
    return (
        <section className="tour__list">
            { tourData.map(tour=>{
                return <Tour key={ tour.id } tour= { tour } handleShowInfo={()=>handleShowInfo(tour.id)} showInfo={ tour.showInfo} removeTour={ () => removeTour(tour.id) }/>
            }) }
            
        </section>
    )
}

export default TourList
