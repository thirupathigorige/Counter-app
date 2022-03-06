import './App.css';
import React , { Component }from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'

class App extends Component {

  constructor() {
    super();
    console.log("app-constructor");
  };
  render() {

    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  };
};


export default App;
