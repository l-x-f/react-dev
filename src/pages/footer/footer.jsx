import React, { Component } from 'react';
import axios from 'axios';
import LogoutButton from '../LogoutButton';
import FormComponent from '../form';
import { Link } from 'react-router-dom'
import './footer.less';
const element = (

  <h1 className="greeting" onClick={this.click}>
    Hello, world!
  </h1>
);

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Hello, world!
    </button>
  );
}
let listItems = '';
class Footer extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, data: [], listItems: [] };
  }
  componentDidMount() {

    axios({
      type: 'get',
      url: 'http://cangdu.org:8001/v1/cities',
      params: {
        type: 'group'
      }
    }).then(res => {
      this.setState({ data: res.data.A });
      // console.log(res)
    })

  }
  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // };

  // componentWillReceiveProps() {
  //   if (this.state.data.lenght > 0) {
  //     this.state.listItems = this.state.data.map((number, index) => {
  //       return <li key={index.toString()}>{number}</li>
  //     });

  //   }
  // }

  handleClick(date) {
    alert('点我干嘛', date)
    // console.log(this, date)
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    let dom=null;
    // console.log(this.state.data, 'data');
    
    if (this.state.data.length > 0) {
      dom = this.state.data.map((item, index) => {
        return <li key={index}>{item.name}</li>
      });
    }
    // this.forceUpdate()
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <footer className="App-footer" >
        <h2 onClick={this.handleClick.bind(this, this.props.date)}> 我是尾部</h2>
        {dom}
        {button}
        {element}
        {this.props.date}
        <FormComponent data='难受' />

        <Link to="/header">To header</Link>
        <a href='/header'>点我去头部</a>
      </footer>
    );
  }
}
export default Footer;
