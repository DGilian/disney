import React, { Component } from 'react'
import './cardDetail.css'

export default class CardDetail extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {title, imgPath, reservation, description , arrivalDate, departureDate} = this.props
    const sourceImg = require('../'+imgPath)

    return (
      <article>
        <h3>{title}</h3>
        <div className="content">
          <img className="img" src={sourceImg}/>
          <div>
            <p>Réservé {reservation} fois dans les dernières 24 heures</p>
            <p>{description}</p>
            <p>Arrivée le : {arrivalDate} <br /> Départ le : {departureDate} </p>
          </div>
        </div>
      </article>
    )
  }
}
