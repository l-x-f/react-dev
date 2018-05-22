import React, { Component } from 'react';
import {  Switch, Route, Redirect,BrowserRouter } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import home from '../pages/home/home';
const my = asyncComponent(() => import("@/pages/my/my"));
const search = asyncComponent(() => import("@/pages/search/search"));
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
// BrowserRouter  正常路由
// HashRouter    哈希路由
export default class RouteConfig extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/my" component={my} />
          <Route path="/search" component={search} />
          {/* <Route path="/helpcenter" component={helpcenter} /> */}
          {/* <Route path="/production" component={production} /> */}
          {/* <Route path="/balance" component={balance} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}