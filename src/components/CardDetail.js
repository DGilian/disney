import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './cardDetail.css'
import arrowUp from '../img/arrow-up.svg.png'
import arrowDown from '../img/arrow-down.svg.png'

export default class CardDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: false
    }
  }

  // arrow function for binding
  handleClick = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const {
      title,
      imgPath,
      reservation,
      description,
      arrivalDate,
      departureDate,
      energy,
      power,
      price,
      show,
      year,
      datePublication
    } = this.props

    const sourceImg = require(`../${imgPath}`)
    const { isHidden } = this.state

    return (
      <article>
        <header>
          <h3 className="title">{title}</h3>
          <img
            className="arrowUp"
            src={isHidden ? arrowDown : arrowUp}
            onClick={this.handleClick}
            alt="symbol arrowUp"
          />
        </header>
        <hr />
        <div className={isHidden ? 'content hidden' : 'content'}>
          <img
            className={show === 'hotels' ? 'img' : 'imgCar'}
            src={sourceImg}
            alt={`${title}`}
          />
          {show === 'hotels' ? (
            <div className="detailText">
              <p
              >{`Réservé ${reservation} fois dans les dernières 24 heures`}</p>
              <p>{description}</p>
              <p>
                {`Arrivée le : ${arrivalDate}`}
                <br />
                {`Départ le : ${departureDate}`}
              </p>
            </div>
          ) : (
            <div>
              <ul>
                <li>{`Puissance : ${power}`}</li>
                <li>{`Energie : ${energy}`}</li>
                <li>{`Année : ${year}`}</li>
                <li>{`Prix : ${price}`}</li>
              </ul>
            </div>
          )}
        </div>
        {show === 'cars' && (
          <div className={isHidden ? 'publishDate hidden' : 'publishDate'}>
            <hr />
            <p>Publié le {datePublication}</p>
          </div>
        )}
      </article>
    )
  }
}

CardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  reservation: PropTypes.number,
  description: PropTypes.string,
  arrivalDate: PropTypes.string,
  departureDate: PropTypes.string,
  energy: PropTypes.string,
  power: PropTypes.number,
  price: PropTypes.number,
  show: PropTypes.string.isRequired,
  year: PropTypes.number,
  datePublication: PropTypes.string
}

CardDetail.defaultProps = {
  energy: '',
  power: 0,
  price: 0,
  year: 0,
  datePublication: '',
  reservation: 0,
  description: '',
  arrivalDate: '',
  departureDate: ''
}
