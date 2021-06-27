import React, { useState, useEffect } from "react";
import "./index.css";
import { list, brandList } from "./modules";
import left_icon from "@/assets/images/left_icon.png";
import right_icon from "@/assets/images/right_icon.png";
import aboutUs_bg from "@/assets/images/aboutUs-bg.png";

let through = true;

const Home = () => {
  const [initialKey, setInitialKey] = useState(6); //  初始key

  const [distance, setDistance] = useState(-11.58); //  距离

  const operating = (sort, num) => {
    if (through) {
      through = false;
      if (initialKey + sort === 13) {
        setInitialKey(7);
        setDistance(-13.51);
        return
      } else if (initialKey + sort === -1) {
        setInitialKey(11);
        setDistance(-21.23);
        return
      }
      setInitialKey(initialKey + sort);
      setDistance(distance + num);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      through = true;
    }, 500)
  }, [distance]);

  return (
    <div className="home-box">
      <div className="home-top">
        <span className="title">
          MushroomProxy provides the best quality/cost effective residential
          proxies.
        </span>
        <span className="annotation">
          We can make it much easier to succeed.
        </span>
      </div>

      <div className="feature-box">
        <p className="feature-title">FEATURE</p>

        <div className="feature-list">
          {list.map((item, index) => {
            return (
              <div className="list-box" key={index}>
                <img className="list-bg" src={item.src} alt="" />
                <p className="list-title" style={{ color: item.color }}>
                  {item.title}
                </p>
                <div className="info-box">
                  <span className="list-info">{item.info}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-us">
        <div className="brand-list">
          <img className="operating-icon" onClick={() => { operating(1, -1.93); }} src={left_icon} alt="" />

          <div className="brand-box">
            <div className="brand-show" style={{ left: `${distance}rem` }}>
              {brandList.map((item, index) => {
                return (
                  <img className="brand-icon" src={item.icon} alt="" key={index} style={{ marginRight: `${item.sort === 17 && '0'}` }} />
                );
              })}
            </div>
          </div>

          <img className="operating-icon" onClick={() => { operating(-1, 1.93) }} src={right_icon} alt="" />
        </div>

        <div className="about-info">
          <span className="info-title">About us</span>

          <div className="about-info-box">
            <img className="info-bg" src={aboutUs_bg} alt="" />
            <span className="info-box-title">Company profile</span>
            <p className="info-box-info">There are no extra types of proxies, no diversified pools, simple use, stability and high quality are our pronouns. Mushroom proxy is your first choice.</p>
            <p className="info-box-info">contact email:support@mushroomproxy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
