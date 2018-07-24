import React, { Component } from 'react'
import imageCar from '../images/honda.jpg'
import cssCard from './cardDetail.css'

export default class CardDetail extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const {title} = this.props
    return (
      <article>
        <h3>{title}</h3>
        <div className="content">
          <img className="img" src={imageCar}/>
          <ul>
            <li>puissance</li>
          </ul>
        </div>
        <p>date</p>
      </article>
    )
  }
}
