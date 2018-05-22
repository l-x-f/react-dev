import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import HomeServer from '../../api/home.js';
import 'antd-mobile/dist/antd-mobile.less';
import './home.less';
import { NavBar, Carousel, WingBlank, PullToRefresh } from 'antd-mobile';
import { imgBaseUrl } from '../../api/config';
import MyTabar from '../common/MyTabar';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { menuData: [], shopData: [], star: 1, params: { offset: 1, limit: 10 } };
  }

  componentDidMount() {
    this.getShopList()
    HomeServer.getMenu().then(res => {
      // console.log(res)
      // console.log(JSON.stringify(res))
      this.setState({ menuData: res });
    })
    console.log(this)
  }
  getShopList() {

    HomeServer.getShoppingList(this.state.params).then(res => {
      // console.log(res)
      // console.log(JSON.stringify(res))
      this.setState({ shopData: [...this.state.shopData, ...res] });
    })
  }
  toSubMenu(data) {
    console.log('点我干嘛', data)
    window.location.href = 'https://' + data;
    // console.log(this, date)
  }
  reFresh() {
    console.log(this, '000')
    this.setState({
      params: {
        offset: this.state.params.offset + 1, limit: 10
      }
    });

    console.log(this.state.params.offset)
    this.getShopList(
      this.state.params
    )

  }

  render() {
    // 菜单模块
    let menu1 = null;
    let menu2 = null;
    menu1 = this.state.menuData.slice(0, 8).map((item, index) => {

      return <div onClick={this.toSubMenu.bind(this, item.link)} className="item" key={item.id}>
        <img src={imgBaseUrl + item.image_url} alt="" />
        {item.title}
      </div>

    })
    menu2 = this.state.menuData.slice(8, -1).map((item, index) => {

      return <div onClick={this.toSubMenu.bind(this, item.link)} className="item" key={item.id}>
        <img src={imgBaseUrl + item.image_url} alt="" />
        {item.title}
      </div>

    })

    // 商家模块
    let shopList = null;
    shopList = this.state.shopData.map((item, index) => {

      return <li className='shop-item' key={index}>
        {/* https://elm.cangdu.org/img/1637ba46c9112696.png */}
        <div className='img-box'>
          <img src={'https://elm.cangdu.org/img/' + item.image_path} alt="" />
        </div>
        <div className='content-box-left'>
          <h4 className='title'>{item.name}</h4>
          <p className='rate'><span>{'★★★★★☆☆☆☆☆'.substring(5 - Math.round(item.rating), 9 - Math.round(item.rating) + 1)} </span>评分{item.rating} 月售{item.recent_order_num}</p>
          <p className='packing-fee'>￥{item.float_minimum_order_amount}起配送/配送费约{item.float_delivery_fee}元</p>
        </div>
        <div className='content-box-right'>
          <h4 className='title'>保准票</h4>
          <p className='rate'>蜂鸟专送 准时达</p>
          <p className='packing-fee'>{item.distance}/<span>{item.order_lead_time}</span></p>
        </div>


      </li>

    })


    return (
      <div className="home" >
        {/* 导航 */}
        <NavBar mode="dark">首页</NavBar>
        {/* 菜单 */}
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
        {/* 商家 */}
        <PullToRefresh
          distanceToRefresh={100}
          direction='up'
          refreshing={false}
          onRefresh={this.reFresh.bind(this)}
        >
          <div className='shop-wrap'>
            <h4 className='shop-wrap-title'>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>附近商家</h4>
            <ul>
              {shopList}
            </ul>
          </div>
        </PullToRefresh>
        <MyTabar></MyTabar>
      </div>
    );
  }
}
export default Home;
