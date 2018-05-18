import React, { Component } from 'react';
export default class FormComponent extends Component{ 
  click(item){
    alert(item)
  }

    render(){
    
      return(
        <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        
      )

    }
   }
   