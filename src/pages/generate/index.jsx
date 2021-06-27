import React from 'react';
import './index.css';
import { Select } from 'antd';

const { Option } = Select;

const Generate = () => {
    return <div className="generate-box">
        <div className="generate-operating-box">
            <div className="btn-box">
                <div className="btn">Generate</div>
                <div className="btn">Reset</div>
                <div className="btn">Copy</div>
                <div className="btn">Shuffle</div>
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
                        <Select className="select-option" bordered={false}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
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
                    <p className="graphics-num">212GB</p>
                    <p className="graphics-info">total bandwidth</p>
                </div>
                <div className="graphics-box">
                    <p className="graphics-num">69.556602805GB</p>
                    <p className="graphics-info">used bandwidth</p>
                </div>
            </div>

            <div className="schedule-box">
                <div className="schedule-top">
                    <span className="schedule-description">used rate</span>
                    <span className="schedule-data">32.80971830424528%</span>
                </div>

                <div className="progressBar-box">
                    <div className="progress-bar"></div>
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
}

export default Generate;