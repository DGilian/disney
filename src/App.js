import React, { Component } from 'react';
import './App.css';
import backgroundGrey from './images/Fond.png'
import vegetation from './images/Image2.png'
import viewtemp from './images/cars_view.jpg'

class App extends Component {
  render() {
    return (
      <main className="App">
        <section>
          <img src={backgroundGrey} />
          <img src={vegetation} />
         <p>hello world</p>
        </section>
       <section>

       </section>
       <img src={viewtemp}/>
      </main>
    );
  }
}

export default App;
