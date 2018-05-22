import React, { Component } from 'react';
import MyTabar from '../common/MyTabar';
import { Button, NavBar, InputItem, Toast } from 'antd-mobile';
import './search.less';
class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '', data: [], listItems: [] };
  }

  componentDidMount() {

  }
  search() {
    if (!this.state.value) {
      Toast.fail('请输入搜索内容', 2);
    } else {
      Toast.fail('未搜索到匹配项', 2);

    }
  }
  handleChange(input) {
    console.log(input)
    this.setState({ value: input });
  }

  render() {


    return (
      <div id='search'>
        {/* 导航 */}
        <NavBar mode="dark">搜索</NavBar>

        <div className='search-box'>
          <InputItem
            value={this.state.value} onChange={this.handleChange.bind(this)}
            className='search-input'
            placeholder='请输入商家或美食名称'
            clear={true}
          ></InputItem>
          <Button type="primary" onClick={this.search.bind(this)} className='search-btn'>搜索</Button>
        </div>
        {this.state.value}

        <MyTabar ></MyTabar>
      </div>

    );
  }
}
export default Search;
