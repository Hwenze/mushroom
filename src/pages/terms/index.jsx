import React from "react";
import "./index.css";
import terms_bg from "@/assets/images/terms_bg.png";
import { list } from "./modules";

const Terms = () => {
  return (
    <div className="terms-box">
      <img className="terms_bg" src={terms_bg} alt="" />

      <div className="terms-info-box">
        {list.map((item) => {
          return (
            <>
              <span className="terms-info-title">{item.title}</span>
              {item.children.map((it) => {
                return <p className="terms-info-info">{it}</p>;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
