import React, { Component } from 'react'
import './cardDetail.css'
import arrowUp from '../img/arrow-up.svg.png'

export default class CardDetail extends Component {
  constructor(props){
    super(props)
  }
  handleClick(){
    console.log("add class hidden")
  }
  render() {
    const {title, imgPath, reservation, description , arrivalDate, departureDate, energy, power, price, show, year, datePublication} = this.props

    const sourceImg = require('../'+imgPath)

    return (
      <article>
        <header>
          <h3>{title}</h3>
          <img  className="arrowUp" src={arrowUp} onClick = {this.handleClick}/>
        </header>
        <hr />
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
        <div>
          <hr />
          <p>Publié le {datePublication}</p>
        </div> : ""}
      </article>
    )
  }
}
