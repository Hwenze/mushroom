import React from 'react';
import './index.css';
import { Input, Select } from 'antd';
import { columns, datas } from './modules';

const { Option } = Select;

const Order = () => {
    return <div className="order-box">
        <div className="order-box-top">
            <div className="order-operating-box">
                <div className="operating-title">Product  Type</div>
                <Select className="select-option" placeholder="Please select product" bordered={false}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>

                <div className="operating-title">Discount Code</div>
                <div className="inpout-box">
                    <Input className="input-sty" placeholder="Discount Code" bordered={false} />
                    <div className="apply">Apply</div>
                </div>

                <div className="totla">Total Amount：100$</div>


                <div className="btn wechat">WeChat Pay/Renew</div>
                <div className="btn stripe">Stripe Pay/Renew</div>
            </div>
        </div>

        <div className="historical-orders">
            <span className="historical-title">Historical Orders</span>

            <div className="table-box">
                <div className="table-title">
                    {columns.map((item) => {
                        return <div className="columns" style={{ width: item.width }}>{item.title}</div>
                    })}
                </div>

                {datas.map((item, index) => {
                    return <div className="table-row">
                        <div className="row row-order">
                            <p className="row-name" title={item.order}>{item.order}</p>
                        </div>
                        <div className="row row-shopname">
                            <p className="row-name" title={item.shopname}>{item.shopname}</p>
                        </div>
                        <div className="row row-price">
                            <p className="row-name" title={item.price}>{item.price}</p>
                        </div>
                        <div className="row row-status">
                            <p className="row-name" title={item.status}>{item.status}</p>
                        </div>
                        <div className="row row-paytime">
                            <p className="row-name" title={item.paytime}>{item.paytime}</p>
                        </div>
                        <div className="row row-createime">
                            <p className="row-name" title={item.createime}>{item.createime}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}

export default Order;