import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './index.css';
import logo from '../../assets/images/logo.png';
import { route } from './modules';

// 页面头部组件
const Header = (props) => {
    const [current, setCurrent] = useState('home');

    const { pathname } = useLocation();

    let history = useHistory();

    useEffect(() => {
        for (let i = 0, length = route.length; i < length; i++) {
            if (pathname === route[i].path) {
                setCurrent(route[i].name);
                return
            }
        }
    }, [pathname])

    const handleClick = (type) => {
        setCurrent(type);
        for (let i = 0, length = route.length; i < length; i++) {
            if (type === route[i].name) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                history.push(route[i].path);
                return
            }
        }
    }

    const Menu = () => (
        <div className="menu">
            <span className={`tabs ${(current === 'home' && 'active')}`} onClick={() => { handleClick('home') }}>Home</span>
            <span className={`tabs terms ${(current === 'terms' && 'active')}`} onClick={() => { handleClick('terms') }}>Terms&Conditions</span>
            <div className="group-box">
                <span className={`tabs dashboard ${(current === 'order' ? 'active' : current === 'generate' ? 'active' : '')}`}>Dashboard</span>
                <div className="itemGroup">
                    <span className={`group ${(current === 'order' && 'act')}`} onClick={() => { handleClick('order') }}>Order</span>
                    <span className={`group ${(current === 'generate' && 'act')}`} onClick={() => { handleClick('generate') }}>Generate</span>
                </div>
            </div>
        </div>
    );

    return <div className="header">
        <img className="logo" src={logo} alt="" />

        <Menu />

    </div>
}

export default Header;