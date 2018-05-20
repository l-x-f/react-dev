import React, { Component } from 'react';
import './header.less';
import logo from '../../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">我是头部</h1>
      </header>
    );
  }
}

export default Header;
