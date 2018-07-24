import React, { Component } from 'react';
import './App.css';
import backgroundGrey from './img/Fond.png'
import vegetation from './img/Image2.png'
import CardDetail from './components/CardDetail'

import dataCars from './json/cars.json'
import dataHotels from './json/hotels'

class App extends Component {
  constructor(){
    super()
    this.state = {
      show : "hotels"
    }
  }
  handleclickCar= ()=>{
    this.setState({
      show : "cars"
    })
  }

  handleclickHotel=()=>{
    this.setState({
      show : "hotels"
    })
  }

  render() {
    return (
      <main className="App">
        <div className="container">
          <section className="sectionImgBackground">
            <section className="backgGrey" style={{backgroundImage: `url(${backgroundGrey})`}}></section>
            <section className="backgVegetation"style={{backgroundImage: `url(${vegetation})`}}>Hello world</section>
          </section>
          <section className ="listContent">
            <div className = "containerList">
              <button onClick = {this.handleclickHotel}>Hôtels</button>
              <button onClick = {this.handleclickCar}>Voitures</button>
             
              { this.state.show === "hotels" ?
              dataHotels.map( (value)=>{
                return <CardDetail 
                  key={value.name} 
                  title={value.name}
                  imgPath = {value.imgPath}
                  reservation = {value.nbReservationLast24hours}
                  description ={value.description}
                  arrivalDate = {value.dates.arrivalDate}
                  departureDate = {value.dates.departureDate}
                  show = {this.state.show}/>
              }) :
              dataCars.map( (car) =>{
                return <CardDetail 
                  key = {car.type}
                  title = {car.brand+' '+car.type}
                  imgPath = {car.imgPath}
                  power = {car.power}
                  energy = {car.energy}
                  year = {car.year}
                  price = {car.price}
                  datePublication = {car.datePublication}
                  show = {this.state.show}
                />
              }) }
                
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
