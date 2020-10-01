import React, { Component } from 'react'
import "./App.scss"
import Navbar from "./Components/Navbar/Navar"
import TourList from './Components/Tourlist/TourList'

class App extends Component {
  render() {
    return (
      <div classNames="App">
        <Navbar/>
        <TourList/>
      </div>
    )
  }
}

export default App
