import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";//引入routerdom

// 导入的页面
import Home from "../pages/home/index.jsx";
import Terms from "../pages/terms/index.jsx";
import Order from "../pages/order/index.jsx";
import Generate from "../pages/generate/index.jsx";

class Router extends Component {
    render() {
        return <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mushroom" exact component={Home} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/order" exact component={Order} />
            <Route path="/generate" exact component={Generate} />
        </Switch>
    }
}

export default Router;
