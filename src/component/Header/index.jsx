import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./index.css";
import logo from "../../assets/images/logo.png";
import { route } from "./modules";
import { localStorage } from "@/utils/utils";

// 页面头部组件
const Header = (props) => {
  const [current, setCurrent] = useState("home");

  const showLogin = localStorage.getStorage("token");

  const { pathname } = useLocation();

  let history = useHistory();

  //   路由变化判断
  useEffect(() => {
    for (let i = 0, length = route.length; i < length; i++) {
      if (pathname === route[i].path) {
        setCurrent(route[i].name);
        return;
      }
    }
  }, [pathname]);

  //   跳转前判断
  const handleClick = (type) => {
    if (type === "order" || type === "generate") {
      console.log(localStorage.getStorage("token"));
      localStorage.setStorage('token', 'ytVPotKGekeiVewIbsNBUq165OjNpF')
      if (!localStorage.getStorage("token")) {
        // window.location.href = "https://discord.com/api/oauth2/authorize?client_id=782123824727588864&redirect_uri=https%3A%2F%2Fmushroomproxy.com%2Fmiddle.html&response_type=code&scope=identify%20guilds.join";
      }
    }
    setCurrent(type);
    for (let i = 0, length = route.length; i < length; i++) {
      if (type === route[i].name) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        history.push(route[i].path);
        return;
      }
    }
  };

  //   退出登录
  const signOut = () => {
    localStorage.delStorage("token");
    history.push("/");
  };

  //   顶部菜单
  const Menu = () => (
    <div className="menu">
      <span
        className={`tabs ${current === "home" && "active"}`}
        onClick={() => {
          handleClick("home");
        }}
      >
        Home
      </span>
      <span
        className={`tabs terms ${current === "terms" && "active"}`}
        onClick={() => {
          handleClick("terms");
        }}
      >
        Terms&Conditions
      </span>
      <div className="group-box">
        <span
          className={`tabs dashboard ${
            current === "order"
              ? "active"
              : current === "generate"
              ? "active"
              : ""
          }`}
        >
          Dashboard
        </span>
        <div className="itemGroup">
          <span
            className={`group ${current === "order" && "act"}`}
            onClick={() => {
              handleClick("order");
            }}
          >
            Order
          </span>
          <span
            className={`group ${current === "generate" && "act"}`}
            onClick={() => {
              handleClick("generate");
            }}
          >
            Generate
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />

      <Menu />

      {showLogin && (
        <div
          className="login-out"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </div>
      )}
    </div>
  );
};

export default Header;
