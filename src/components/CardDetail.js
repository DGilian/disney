import React, { Component } from 'react'
import './cardDetail.css'

export default class CardDetail extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {title, imgPath, reservation, description , arrivalDate, departureDate, energy, power, price, show, year, datePublication} = this.props

      console.log(this.props)
      console.log(description)
    const sourceImg = require('../'+imgPath)

    return (
      <article>
        <h3>{title}</h3>
        <div className="content">
          <img className="img" src={sourceImg}/>
          {show === "hotels" ?
            <div>
              <p>Réservé {reservation} fois dans les dernières 24 heures</p>
              <p>{description}</p>
              <p>Arrivée le : {arrivalDate} <br /> Départ le : {departureDate} </p>
           </div> 
           :
           <div>
             <ul>
               <li>Puissance : {power} CV</li>
               <li>Energie : {energy}</li>
               <li>Année : {year}</li>
               <li>Prix : {price}</li>
             </ul>
           </div>
           }  
        </div>
        {show === "cars" ?
          <p>Publié le {datePublication}</p> : <p></p>}
      </article>
    )
  }
}
