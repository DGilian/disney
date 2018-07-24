import React, { Component } from 'react'
import imageCar from '../images/honda.jpg'
import cssCard from './cardDetail.css'

export default class CardDetail extends Component {
  render() {
    return (
      <article>
        <h3>Honda</h3>
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
