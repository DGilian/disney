import React, { Component } from 'react'
import './cardDetail.css'
import arrowUp from '../img/arrow-up.svg.png'
import arrowDown from '../img/arrow-down.svg.png'

export default class CardDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      isHidden : false
    }
  }
  //arrow function for binding
  handleClick = () =>{
    if(this.state.isHidden === false){
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    else(
      this.setState({
        isHidden : false
      })
    )
  }
  render() {
    const {title, imgPath, reservation, description , arrivalDate, departureDate, energy, power, price, show, year, datePublication} = this.props

    const sourceImg = require('../'+imgPath)

    return (
      <article>
        <header>
          <h3>{title}</h3>
          <img  className="arrowUp" 
                src={this.state.isHidden ? arrowDown : arrowUp} 
                onClick = {this.handleClick}/>
        </header>
        <hr />
        <div className={this.state.isHidden ? "content hidden" : "content"}>
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
        <div className={this.state.isHidden ? "publishDate hidden" : "publishDate"}>
          <hr />
          <p>Publié le {datePublication}</p>
        </div> : ""}
      </article>
    )
  }
}
