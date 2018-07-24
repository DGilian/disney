import React, { Component } from 'react';
import './App.css';
import backgroundGrey from './images/Fond.png'
import vegetation from './images/Image2.png'
import viewtemp from './images/cars_view.jpg'
import CardDetail from './components/CardDetail'

class App extends Component {
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
              <button>Hôtels</button>
              <button>Voitures</button>
              <CardDetail/>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
