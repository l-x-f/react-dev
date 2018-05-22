import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import MyTabar from '../common/MyTabar';
import './my.less';
class my extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, data: [], listItems: [] };
  }

  componentDidMount() {

  }
  toSubMenu(data) {

  }

  render() {


    return (
      <div>
           <NavBar mode="dark">我的</NavBar>

        <MyTabar ></MyTabar>
      </div>

    );
  }
}
export default my;
