import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Input, Select, notification, Modal } from "antd";
import { columns, pricing } from "./modules";
import { getLoadAll, proxyBuy, discountInfo } from "./server";

const { Option } = Select;

const Order = () => {
  // 最后价格
  const [priceData, setPricepriceData] = useState({
    checkoutSessionid: "",
    payjsQr: "",
    fee: 0,
    feeDao: 0,
  });
  // 折扣loading
  const [applyLoad, setApplyLoad] = useState(false);
  // 下拉值
  const [selVal, setSelVal] = useState(1);
  // 折扣码
  const [code, setCode] = useState("");
  // 列表数据
  const [orderList, setOrderList] = useState([]);
  // 弹窗开关
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 获取所有订单
  const getLoadAllFn = () => {
    getLoadAll().then(
      (res) => {
        if (res && res.code === 200) {
          const arr = [];
          res.data.forEach((item) => {
            if (item.status === 1) {
              arr.push(item);
            }
          });
          arr.sort((a, b) => {
            return new Date(b.payTime).getTime() - new Date(a.payTime).getTime()
          });
          
          setOrderList([...arr]);
        } else {
          notification.error({
            message: "system error",
            description: (res && res.message) || "Your login has expired",
          });
        }
      },
      (error) => {
        notification.error({
          message: "system error",
          description: "Please contact the administrator",
        });
      }
    );
  };

  // 获取折扣后价格
  const proxyBuyFn = (type) => {
    const params = {
      discountKey: code,
      shopType: selVal,
    };

    setApplyLoad(true);

    discountInfo(params).then(
      (result) => {
        if (result && result.code === 200) {
          proxyBuy(params).then(
            (res) => {
              if (res && res.code === 200) {
                setPricepriceData({
                  ...res.result,
                  feeDao: result.result.feeDao,
                  fee: result.result.fee,
                });
                if (type === "wechat") {
                  setIsModalVisible(true);
                } else if (type === "stripe") {
                  window.payFn(res.result.checkoutSessionid);
                }
              } else {
                notification.error({
                  message: "system error",
                  description: (res && res.message) || "Your login has expired",
                });
              }
              setApplyLoad(false);
            },
            (error) => {
              notification.error({
                message: "system error",
                description: "Please contact the administrator",
              });
              setApplyLoad(false);
            }
          );
        } else {
          notification.error({
            message: "system error",
            description: (result && result.message) || "Your login has expired",
          });
          setApplyLoad(false);
        }
      },
      (error) => {
        notification.error({
          message: "system error",
          description: "Please contact the administrator",
        });
        setApplyLoad(false);
      }
    );
  };

  const handleOk = () => {
    setIsModalVisible(false);
    getLoadAllFn();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // 下拉选项
  const selChange = (value, e) => {
    setSelVal(value);
    setPricepriceData({
      ...priceData,
      feeDao: e.key,
    });
  };

  // code输入
  const codeChange = (e) => {
    setCode(e.target.value);
  };

  useEffect(() => {
    getLoadAllFn();
  }, []);

  return (
    <div className="order-box">
      <div className="order-box-top">
        <div className="order-operating-box">
          <div className="operating-title">Product Type</div>
          <Select
            className="select-option"
            placeholder="Please select product"
            bordered={false}
            defaultValue={selVal}
            onChange={selChange}
          >
            {pricing.map((item) => {
              return (
                <Option value={item.value} key={item.key}>
                  {item.text}
                </Option>
              );
            })}
          </Select>

          <div className="operating-title">Discount Code</div>
          <div className="inpout-box">
            <Input
              className="input-sty"
              placeholder="Discount Code"
              bordered={false}
              value={code}
              onChange={codeChange}
            />
            <Button
              className="apply"
              loading={applyLoad}
              onClick={() => {
                proxyBuyFn("apply");
              }}
            >
              Apply
            </Button>
          </div>

          <div className="totla">
            Total Amount：{priceData.feeDao}${" "}
            {priceData.fee > 0 && "/ " + priceData.fee + "￥"}
          </div>

          <Button
            className="btn wechat"
            loading={applyLoad}
            onClick={() => {
              proxyBuyFn("wechat");
            }}
          >
            WeChat Pay/Renew
          </Button>
          <Button
            className="btn stripe"
            loading={applyLoad}
            onClick={() => {
              proxyBuyFn("stripe");
            }}
          >
            Stripe Pay/Renew
          </Button>
        </div>
      </div>

      <div className="historical-orders">
        <span className="historical-title">Historical Orders</span>

        <div className="table-box">
          <div className="table-title">
            {columns.map((item) => {
              return (
                <div className="columns" style={{ width: item.width }}>
                  {item.title}
                </div>
              );
            })}
          </div>

          {orderList.map((item, index) => {
            return (
              <div className="table-row">
                <div className="row row-order">
                  <p className="row-name" title={item.payjsOrderId}>
                    {item.payjsOrderId}
                  </p>
                </div>
                <div className="row row-shopname">
                  <p className="row-name" title={item.shopName}>
                    {item.shopName}
                  </p>
                </div>
                <div className="row row-price">
                  <p className="row-name" title={item.price}>
                    {item.price}
                  </p>
                </div>
                <div className="row row-status">
                  <p className="row-name" title={item.status}>
                    {item.status}
                  </p>
                </div>
                <div className="row row-paytime">
                  <p className="row-name" title={item.payTime}>
                    {item.payTime}
                  </p>
                </div>
                <div className="row row-createime">
                  <p className="row-name" title={item.createTime}>
                    {item.createTime}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        title="Wechat Pay"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="cancel"
        okText="I’m pay"
      >
        <div className="img-box">
          <img className="qrcode" src={priceData.payjsQr} alt="" />
          <p className="img-text">{priceData.fee}RMB</p>
        </div>
      </Modal>
    </div>
  );
};

export default Order;
