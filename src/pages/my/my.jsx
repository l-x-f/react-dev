import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import MyTabar from '../common/MyTabar';
import { Link } from 'react-router-dom'

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
        <div className='my-warp'>
          <Link to='/' className='profile-link'>
            <img src="https://img2.woyaogexing.com/2018/05/22/356346955771e83a!400x400_big.jpg" alt="" />
            <div className='personal-info'>
              <p>1446628111</p>
              <p><i className="fa fa-mobile" aria-hidden="true"></i>
                123456789
              </p>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>

          </Link>

          <section className="info-data">
            <ul className="clear">
              <li className="info-data-link">
                <p className="info-data-top"><b >10.00</b>元</p>
                <p className="info-data-bottom">我的余额</p>
              </li>
              <li className="info-data-link">
                <p className="info-data-top"
                ><b className='second-count'>3</b>个
              </p>
                <p className="info-data-bottom">
                  我的优惠</p>
              </li>
              <li className="info-data-link">
                <p className="info-data-top"
                ><b >0</b>分</p> <p className="info-data-bottom">
                  我的积分</p></li>
            </ul>
          </section>

        
          <section class="profile-menu">
            <div className='profile-menu-item'>
              <i className="fa fa-list-alt" aria-hidden="true"></i>
              我的订单
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className='profile-menu-item'>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              积分商城
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className='profile-menu-item'>
              <i className="fa fa-gift" aria-hidden="true"></i>
              会员卡
              <i className="fa fa-angle-right" aria-hidden="true"></i>

            </div>

          </section >

  <section class="profile-menu">
            <div className='profile-menu-item'>
              <i className="fa fa-envelope-open" aria-hidden="true"></i>
            服务中心
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
            <div className='profile-menu-item'>
              <i className="fa fa-cloud-download" aria-hidden="true"></i>
              下载app
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </div>
     

          </section >

        </div >
        <MyTabar ></MyTabar>
      </div >

    );
  }
}
export default my;
