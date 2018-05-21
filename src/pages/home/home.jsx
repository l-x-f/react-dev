import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import HomeServer from '../../api/home.js';
import 'antd-mobile/dist/antd-mobile.less';
import './home.less';
import { NavBar, Icon, Carousel, WingBlank } from 'antd-mobile';
import { imgBaseUrl } from '../../api/config';
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, data: [], listItems: [] };
  }

  componentDidMount() {
    let params = {
      page: 1,
      perPage: 200
    }
    HomeServer.getMenu(params).then(res => {
      console.log(res)
      // console.log(JSON.stringify(res))
      this.setState({ data: res });
    })
  }
  toSubMenu(data) {
    console.log('点我干嘛', data)
    window.location.href = 'https://' + data;
    // console.log(this, date)
  }

  render() {
    let menu1 = null;
    let menu2 = null;
    menu1 = this.state.data.slice(0, 8).map((item, index) => {

      return <div onClick={this.toSubMenu.bind(this, item.link)} className="item" key={item.id}>
        <img src={imgBaseUrl + item.image_url} alt="" />
        {item.title}
      </div>

    })
    menu2 = this.state.data.slice(8, -1).map((item, index) => {

      return <div onClick={this.toSubMenu.bind(this, item.link)} className="item" key={item.id}>
        <img src={imgBaseUrl + item.image_url} alt="" />
        {item.title}
      </div>

    })

    return (
      <div className="home" >
        <NavBar
          mode="dark"
          leftContent="首页"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          ]}>导航
          </NavBar>
        <div className='menu-wrap'>
          <WingBlank>
            <Carousel autoplay={false}
              infinite>
              <div className="memu">
                {menu1}
              </div>
              <div className="memu">
                {menu2}
              </div>
            </Carousel>
          </WingBlank>
        </div>
      </div>
    );
  }
}
export default Home;
