import React, { Component } from 'react';
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
        <Footer date='父组件传值'></Footer>
      </div>
    );
  }
}

export default App;
