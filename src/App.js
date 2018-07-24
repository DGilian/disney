import React, { Component } from 'react';
import './App.css';
import backgroundGrey from './images/Fond.png'
import vegetation from './images/Image2.png'
import viewtemp from './images/cars_view.jpg'

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
            <p>hello</p>
          </section>
        </div>
      </main>
    );
  }
}

export default App;
