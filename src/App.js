import React, { Component } from 'react';
import './App.css';
import backgroundGrey from './images/Fond.png'
import vegetation from './images/Image2.png'
import CardDetail from './components/CardDetail'

import dataCars from './json/cars.json'
import dataHotels from './json/hotels'

class App extends Component {
  constructor(){
    super()
    this.state = {
      show : "car"
    }
  }
  handleclickCar= ()=>{
    this.setState({
      show : "car"
    })

  }
  handleclickHotel=()=>{
    this.setState({
      show : "hotel"
    })
  }
  render() {

    return (
      <main className="App">
        <div className="container">
          <section className="imageBack">
            <img src={backgroundGrey} />
            <img src={vegetation} />
            <p>hello world</p>
          </section>
          <section className ="listContent">
            <div className = "containerList">
              <button onClick = {this.handleclickHotel}>Hôtels</button>
              <button onClick = {this.handleclickCar}>Voitures</button>
             
              {dataHotels.map( (value)=>{
                return <CardDetail key={value.name} title={value.name}/>
              })  }
             
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
