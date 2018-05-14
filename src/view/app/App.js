import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.less';
import Footer from '../footer/footer'
import Header from '../header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
    
        <p className="App-intro">
        我是中间的部分
        </p>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
