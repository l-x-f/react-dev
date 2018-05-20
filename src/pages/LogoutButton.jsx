import React, { Component } from 'react';
export default class LogoutButton extends Component{ 
  click(item){
    alert(item)
  }

    render(){
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number,index) =>{
       return <li onClick={this.click.bind(this,index+1)} key={index.toString()}>{number}</li>});
      return(
        <div>
            <button onClick={this.props.onClick}>你好世界！</button>
            {listItems}
        </div>     
        
      )

    }
   }
   