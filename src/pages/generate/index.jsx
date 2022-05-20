import React, { useEffect, useState } from 'react';
import { btnList, treeData, siteData } from './modules';
import { TreeSelect, Button, Select, notification, Input } from 'antd';
import { getBandwidth, getGenerateProxy, getLoadAll } from './server';
import './index.css';

const { Option } = Select;

const Generate = () => {
  // 购买时间
  const [payTime, setPayTime] = useState('0');
  // Classify默认值
  const [classify, setClassify] = useState('1');
  // number默认值
  const [number, setNumber] = useState('1');
  // 代理数组
  const [proxy, setProxy] = useState([]);
  // 按钮加载
  const [loading, setLoading] = useState(false);
  // 要下载的文本
  const [text, setText] = useState('');
  // 已勾选的树
  const [treeValue, setTtreeValue] = useState([]);
  // 流量
  const [flow, setFlow] = useState({
    totalBandWidth: 0,
    usedBandWidth: 0,
    bwExpireDate: '',
  });

  useEffect(() => {
    getLoadAllFn();
    getBandwidthFn();
  }, []);

  // 获取总流量
  const getBandwidthFn = () => {
    getBandwidth().then(
      (res) => {
        if (res && res.code === 200) {
          setFlow(res.result);
        } else {
          notification.error({
            message: 'system error',
            description: (res && res.msg) || 'Your login has expired',
          });
        }
      },
      (error) => {
        notification.error({
          message: 'Tips',
          description: "You haven't login , please login first",
        });
      }
    );
  };

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
          arr.length && setPayTime(arr[0].payTime);
        } else {
          notification.error({
            message: 'system error',
            description: (res && res.message) || 'Your login has expired',
          });
        }
      },
      (error) => {
        notification.error({
          message: 'Tips',
          description: "You haven't login , please login first",
        });
      }
    );
  };

  // 获取代理内容
  const getGenerateProxyFn = () => {
    const newArr = [];
    treeValue.forEach((item) => {
      if (item === 'us2') {
        newArr.push('us');
      } else {
        newArr.push(item);
      }
    });

    const params = {
      country: [...new Set(newArr)].join(','),
      num: number,
      poolNum: classify,
    };

    setLoading(true);

    getGenerateProxy(params).then(
      (res) => {
        if (res && res.code === 200) {
          const arr = (res.result && res.result.split('\n')) || [];
          arr.pop();
          setText(res.result);
          setProxy([...arr]);
        } else {
          notification.error({
            message: 'Tips',
            description:
              classify === '3'
                ? 'Coming Soon'
                : res?.message || 'Your login has expired',
          });
        }
        setLoading(false);
      },
      (error) => {
        notification.error({
          message: 'Tips',
          description: "You haven't login , please login first",
        });
        setLoading(false);
      }
    );
  };

  // 复制文本
  const copyTranslateResult = () => {
    const copyDOM = document.querySelector('.text-box');

    if (copyDOM.innerHTML !== '') {
      const range = document.createRange(); //创建一个range

      window.getSelection().removeAllRanges(); //清楚页面中已有的selection

      range.selectNode(copyDOM); // 选中需要复制的节点

      window.getSelection().addRange(range); // 执行选中元素

      const successful = document.execCommand('copy'); // 执行 copy 操作

      if (successful) {
        notification.success({
          message: 'Copy succeeded',
        });
      } else {
        notification.error({
          message: 'Copy failure',
        });
      }

      // 移除选中的元素
      window.getSelection().removeAllRanges();
    } else {
      notification.info({
        message: 'No content',
      });
    }
  };

  // 打乱排序
  const shuffleSort = () => {
    function randomsort(a, b) {
      return Math.random() > 0.5 ? -1 : 1;
      //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    }
    const arr = proxy.sort(randomsort);
    setProxy([...arr]);
  };

  // 处理打乱后下载的格式
  const cdText = () => {
    let str = '';
    proxy.forEach((item) => {
      str = str + '' + item + '\n';
    });
    return [str];
  };

  // 下载文本
  const downloadTxtFile = () => {
    if (text) {
      const element = document.createElement('a');
      const file = new Blob(cdText(), { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'proxy.txt';
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    } else {
      notification.info({
        message: 'Please generate proxy',
      });
    }
  };

  // 获取当前时间
  const getTime = (timeStr) => {
    if (payTime === '0') {
      return `No data`;
    }
    const date = new Date();
    // 当前时间戳
    const timestamp = date.getTime();
    // 当前时区
    const nTimezone = -date.getTimezoneOffset() / 60;
    // 减少时区差异
    const difference = timestamp - nTimezone * 60 * 60 * 1000;
    // 剩余天数时间戳
    const lastdiff = new Date(timeStr).getTime() - difference;
    // 日
    const day = parseInt(lastdiff / (24 * 60 * 60 * 1000));
    // 时
    const hour = parseInt((lastdiff / (60 * 60 * 1000)) % 24);
    // 分
    const min = parseInt((lastdiff / (60 * 1000)) % 60);
    // 秒
    const second = parseInt((lastdiff / 1000) % 60);

    return `${day}day ${hour}hour ${min}min ${second}sec`;
  };

  // 时间进度条
  const timeBar = (timeStr) => {
    if (payTime === '0') {
      return 0;
    }
    // 过期时间戳
    const endTime = new Date(timeStr).getTime();
    // 购买时间戳
    const starTime = new Date(payTime).getTime();
    // 当前时间戳
    const timestamp = new Date().getTime();
    // 剩余时间戳（过期时间-当前时间）/ （过期时间-购买时间）
    const remaining = (endTime - timestamp) / (endTime - starTime);
    return remaining;
  };

  // classify选择
  const onChange = (value) => {
    setClassify(value);
  };

  // Country选择
  const treeChange = (value) => {
    setTtreeValue(value);
  };

  // number输入
  const numChange = (e) => {
    setNumber(e.target.value);
  };

  // 按钮事件
  const btnCli = (type) => {
    switch (type) {
      case 'Generate':
        if (!treeValue.length) {
          notification.error({
            message: 'Tips Country',
            description: 'Please select Country',
          });
          return;
        }
        if (!/(^[1-9]\d*$)/.test(number)) {
          notification.error({
            message: 'Number only positive integers can be entered !',
          });
          return;
        }
        getGenerateProxyFn();
        break;
      case 'Reset':
        initReset();
        break;
      case 'Copy':
        copyTranslateResult();
        break;
      case 'Shuffle':
        shuffleSort();
        break;
      case 'Download':
        downloadTxtFile();
        break;
      case 'Clear list':
        setText('');
        setProxy([]);
        break;
      default:
        break;
    }
  };

  // 重置清空
  const initReset = () => {
    setClassify('1');
    setNumber('1');
    setProxy([]);
    setTtreeValue([]);
    setText('');
  };

  // 树组件配置
  const tProps = {
    treeData,
    value: treeValue,
    onChange: treeChange,
    treeCheckable: true,
    showCheckedStrategy: 'SHOW_CHILD',
    placeholder: 'Please select',
    maxTagCount: 1,
    style: {
      width: '100%',
      height: '0.7rem',
    },
  };

  return (
    <div className='generate-box'>
      <div className='generate-operating-box'>
        <div className='btn-box'>
          {btnList.map((item, index) => {
            return (
              <Button
                className='btn'
                loading={loading}
                onClick={() => {
                  btnCli(item.name);
                }}
                key={index}
              >
                {item.name}
              </Button>
            );
          })}
        </div>

        <div className='proxies'>Genarate Proxies</div>

        <div className='operating-box'>
          <div className='option-all-box'>
            <div className='option-box'>
              <span className='option-name'>Classify</span>
              <Select
                className='select-option select-box'
                bordered={false}
                onChange={onChange}
                value={classify}
              >
                <Option value='1'>Website</Option>
                <Option value='2'>Sticky+</Option>
                <Option value='3'>sticky</Option>
                <Option value='4'>sticky2/Retail</Option>
              </Select>
            </div>

            <div className='option-box'>
              <span className='option-name'>Country</span>
              <TreeSelect className='select-option tree-select' {...tProps} />
            </div>

            <div className='option-box'>
              <span className='option-name'>Number</span>
              <Input
                className='select-option'
                placeholder='please enter number'
                value={number}
                type='number'
                onChange={numChange}
              />
            </div>
          </div>

          <div id='myText' className='text-box'>
            {proxy.map((item, index) => {
              return (
                <span className='copy-span' key={index}>
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className='generate-info-box'>
        <span className='generate-info-title'>Use Case</span>

        <div className='generate-graphics-box'>
          <div className='graphics-box'>
            <p className='graphics-num'>
              {(flow.totalBandWidth / 1000000000).toFixed(2)}GB
            </p>
            <p className='graphics-info'>total bandwidth</p>
          </div>
          <div className='graphics-box'>
            <p className='graphics-num'>
              {(flow.usedBandWidth / 1000000000).toFixed(2)}GB
            </p>
            <p className='graphics-info'>used bandwidth</p>
          </div>
        </div>

        <div className='schedule-box'>
          <div className='schedule-top'>
            <span className='schedule-description'>used rate</span>
            <span className='schedule-data'>
              {((flow.usedBandWidth / flow.totalBandWidth) * 100).toFixed(2)}%
            </span>
          </div>

          <div className='progressBar-box'>
            <div
              className='progress-bar'
              style={{
                width: (flow.usedBandWidth / flow.totalBandWidth) * 100 + '%',
              }}
            ></div>
          </div>
        </div>

        <div className='schedule-box'>
          <div className='schedule-top'>
            <span className='schedule-description'>expire date</span>
            <span className='schedule-data'>{flow.bwExpireDate} UTC</span>
          </div>
          <div className='schedule-top'>
            <span className='schedule-description'>remaining time</span>
            <span className='schedule-data'>{getTime(flow.bwExpireDate)}</span>
          </div>

          <div className='progressBar-box'>
            <div
              className='progress-bar'
              style={{
                width: timeBar(flow.bwExpireDate) * 100 + '%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
