import React, { Component } from 'react';
export default class FormComponent extends Component {
  click(data) {
    alert(data)
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={this.click.bind(this, this.props.data)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    )

  }
}
