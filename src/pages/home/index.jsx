import React, { useState, useEffect } from "react";
import "./index.css";
import { list, brandList } from "./modules";
import left_icon from "@/assets/images/left_icon.png";
import right_icon from "@/assets/images/right_icon.png";

let through = true;
const originalArr = JSON.parse(JSON.stringify(brandList));

const Home = () => {
  const [visualization, setVisualization] = useState(30); //  可视化宽度

  const [distance, setDistance] = useState(-12.1); //  距离

  const operating = (num) => {
    // this.props.history.push("/terms");
    if (through) {
      through = false;
    //   if (num < 0) {
    //     const backtrack = originalArr.splice(0, 1);
    //     brandList.push(backtrack[0]);
    //     originalArr.push(backtrack[0]);
    //   } else {
    //     const backtrack = originalArr.splice(17, 1);
    //     brandList.unshift(backtrack[0]);
    //     originalArr.unshift(backtrack[0]);
    //   }
      setDistance(distance + num);
    //   setVisualization(visualization + 1.93);
    }
  };

  useEffect(() => {
    through = true;
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
          <img
            className="operating-icon"
            onClick={() => {
              operating(-1.93);
            }}
            src={left_icon}
            alt=""
          />

          <div className="brand-box">
            <div
              className="brand-show"
              style={{  left: `${distance}rem` }}
            //   style={{ width: `${visualization}rem`, left: `${distance}rem` }}
            >
              {brandList.map((item, index) => {
                return (
                  <img className="brand-icon" src={item} alt="" key={index} />
                );
              })}
            </div>
          </div>

          <img
            className="operating-icon"
            onClick={() => {
              operating(1.93);
            }}
            src={right_icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
