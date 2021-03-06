import React, { Component } from 'react'
import './App.css'
import backgroundGrey from './img/Fond.png'
import vegetation from './img/Image2.png'
import CardDetail from './components/CardDetail'

import dataCars from './json/cars.json'
import dataHotels from './json/hotels'

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: 'hotels'
    }
  }

  handleclick = whatShow => {
    this.setState(() => ({ show: whatShow }))
  }

  render() {
    const { show } = this.state
    return (
      <main className="App">
        <div className="container">
          <section className="sectionImgBackground">
            <section
              className="backgGrey"
              style={{
                backgroundImage: `url(${backgroundGrey})`,
                backgroundSize: 'cover'
              }}
            />
            <section
              className="backgVegetation"
              style={{
                backgroundImage: `url(${vegetation})`,
                backgroundSize: 'cover'
              }}
            >
              Hello world
            </section>
          </section>
          <section className="listContent">
            <div className="containerList">
              <button
                type="button"
                onClick={() => {
                  this.handleclick('hotels')
                }}
              >
                Hôtels
              </button>
              <button
                type="button"
                onClick={() => {
                  this.handleclick('car')
                }}
              >
                Voitures
              </button>
              {show === 'hotels'
                ? dataHotels.map(value => (
                    <CardDetail
                      key={value.name}
                      title={value.name}
                      imgPath={value.imgPath}
                      reservation={value.nbReservationLast24hours}
                      description={value.description}
                      arrivalDate={value.dates.arrivalDate}
                      departureDate={value.dates.departureDate}
                      show={show}
                    />
                  ))
                : dataCars.map(car => (
                    <CardDetail
                      key={car.type}
                      title={`${car.brand} ${car.type}`}
                      imgPath={car.imgPath}
                      power={car.power}
                      energy={car.energy}
                      year={car.year}
                      price={car.price}
                      datePublication={car.datePublication}
                      show={show}
                    />
                  ))}
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default App
