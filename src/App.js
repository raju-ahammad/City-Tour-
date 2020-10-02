import React, { Component } from 'react'
import "./App.scss"
import Navbar from "./Components/Navbar/Navar"
import TourList from './Components/Tourlist/TourList'
import { tourData } from "./Data/TourData"

class App extends Component {
  state = {
    tours: tourData,
    showInfo: true
  }
  
  handleInfo = ()=> {
    console.log("Hello I am click");
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  removeTour = (id) => {
    const sortData = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortData
    })
  }
  render() {
    return (
      <div className="">
        <Navbar/>
        <TourList tourData={this.state.tours} handleShowInfo={this.handleInfo} showInfo={this.state.showInfo} removeTour={ this.removeTour }/>
      </div>
    )
  }
}

export default App
