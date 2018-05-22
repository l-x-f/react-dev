
import React from 'react';
import { Link } from 'react-router-dom'

import './AppTabar.less';
class AppTabar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      path: '',

    };
  }
  componentWillMount() {
    console.log(window.location)
    if (window.location.pathname === '/') {
      this.setState.path = this.props.url[0]
    } else {
      this.setState.path = window.location.pathname
    }

  }
  render() {
    let item = null;
    if (this.state.url && this.state.url.length > 1) {
      item = this.state.url.map((value, index) => {
        return <Link to={this.state.url[index] ? this.state.url[index] : 'javascript: void(0)'} className="tab-item" key={index}
          className={this.setState.path === this.state.url[index] ? 'tab-item tab-item-active ' : 'tab-item'}>

          <div className='icon-box'>
            <i className={this.props.faIcon[index] ? (`${this.props.faIcon[index]} icon`) : 'icon-hidden'} aria-hidden="true"></i>
          </div>
          <div> {this.props.name[index] ? this.props.name[index] : '未定义'}</div>

        </Link>
      })
    } else {
      throw 'url必须大于1'
    }
    return (
      <div className='app-tabar'>
        <div className='app-tabar-content'>
          {item}
        </div>

      </div>
    );
  }
}

export default AppTabar