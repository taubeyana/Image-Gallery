import React, { Component, Fragment } from 'react';
// import './App.css';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Gallery from './components/Gallery/Gallery';
import configureStore from './store/configureStore';
export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <div className="App">
          <Header/>
          <Gallery />
        </div>
      </Provider>
    );
  }
}

export default App;
