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
let   listItems=1;
class Footer extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false,data:[]};
  }
  componentWillMount() {
    const data=[];

    axios({
      type:'get',
      url:'http://cangdu.org:8001/v1/cities',
      data: {
      
      },
      // type    	Y      	string 	guess：定位城市， hot：热门城市， group：所有城市
      params: {
        type:'group'       
      }

    }).then(res=>{
      this.setState({data: res.data});
      console.log(res)
    })

  }

  componentWillUnmount() {
    if(this.state.data.lenght>0){
      listItems = this.state.data.map((number,index) =>{
      return <li key={index.toString()}>{number}</li>});
     }
  }

   handleClick(date) {  
    alert('点我干嘛',date)
    console.log(this,date)
  }
  
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
 

    return (
      
      <div className="App">
        <footer className="App-footer"  onClick={this.handleClick.bind(this,this.props.date)}>
        <h2> 我是尾部</h2>
        </footer>
        {button}
        {element}
        {this.props.date}
        <FormComponent/>
        {listItems}
        <Link to="/header">To header</Link>
        <a href='/header'>点我去头部</a>
      </div>
    );
  }
}

export default Footer;
