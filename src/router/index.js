import React, { Component } from 'react';
import { HashRouter, Switch, Route,  Router, Redirect,BrowserRouter } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';
import App from '../view/app/App';
// import Header from '../view/header/header';
// import home from "@/pages/home/home";
const Header = asyncComponent(() => import("@/view/header/header"));
// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活

// BrowserRouter  正常路由
// HashRouter    哈希路由
export default class RouteConfig extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/header" component={Header} />
          {/* <Route path="/helpcenter" component={helpcenter} /> */}
          {/* <Route path="/production" component={production} /> */}
          {/* <Route path="/balance" component={balance} /> */}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}