import React, { useEffect, useState } from "react";
import "./index.css";
import { Select, notification } from "antd";
import { btnList } from "./modules";
import { TreeSelect } from "antd";
import { getBandwidth } from "./server";

const { Option } = Select;
const { SHOW_PARENT } = TreeSelect;

const Generate = () => {
  const [flow, setFlow] = useState({
    totalBandWidth: 1,
    usedBandWidth: 0,
    bwExpireDate: "",
  }); //  流量

  useEffect(() => {
    getBandwidth().then(
      (res) => {
        console.log(res, 56565);
        if (res && res.code === 200) {
          setFlow(res.result);
        } else {
          notification.error({
            message: "system error",
            description: (res && res.message) || "",
          });
        }
      },
      (error) => {
        notification.error({
          message: "system error",
          description: "Please contact the administrator",
        });
        console.log(error, 22222222);
      }
    );
  }, []);

  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      key: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-0",
          key: "0-0-0",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
      key: "0-1",
      children: [
        {
          title: "Child Node3",
          value: "0-1-0",
          key: "0-1-0",
        },
        {
          title: "Child Node4",
          value: "0-1-1",
          key: "0-1-1",
        },
        {
          title: "Child Node5",
          value: "0-1-2",
          key: "0-1-2",
        },
      ],
    },
  ];

  const onChange = (value) => {
    console.log("onChange ", value);
  };

  const tProps = {
    treeData,
    value: [],
    onChange: onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: "Please select",
    style: {
      width: "100%",
    },
  };

  return (
    <div className="generate-box">
      <div className="generate-operating-box">
        <div className="btn-box">
          {btnList.map((item) => {
            return <div className="btn">{item.name}</div>;
          })}
        </div>

        <div className="proxies">Genarate Proxies</div>

        <div className="operating-box">
          <div className="option-all-box">
            <div className="option-box">
              <span className="option-name">Classify</span>
              <Select className="select-option" bordered={false}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>

            <div className="option-box">
              <span className="option-name">Country</span>
              <TreeSelect className="select-option" {...tProps} />
              {/* <Select className="select-option" bordered={false}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select> */}
            </div>

            <div className="option-box">
              <span className="option-name">Number</span>
              <Select className="select-option" bordered={false}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>

          <div className="text-box"></div>
        </div>
      </div>

      <div className="generate-info-box">
        <span className="generate-info-title">Use Case</span>

        <div className="generate-graphics-box">
          <div className="graphics-box">
            <p className="graphics-num">{flow.totalBandWidth}</p>
            <p className="graphics-info">total bandwidth</p>
          </div>
          <div className="graphics-box">
            <p className="graphics-num">{flow.usedBandWidth}</p>
            <p className="graphics-info">used bandwidth</p>
          </div>
        </div>

        <div className="schedule-box">
          <div className="schedule-top">
            <span className="schedule-description">used rate</span>
            <span className="schedule-data">
              {(flow.usedBandWidth / flow.totalBandWidth) * 100}%
            </span>
          </div>

          <div className="progressBar-box">
            <div className="progress-bar" style={{width: (flow.usedBandWidth / flow.totalBandWidth) * 100 + '%'}}></div>
          </div>
        </div>

        <div className="schedule-box">
          <div className="schedule-top">
            <span className="schedule-description">remaining time</span>
            <span className="schedule-data">26day 5hour 40 min 13sec</span>
          </div>

          <div className="progressBar-box">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
