import './index.css';

// 页面底部组件
const Footed = () => {
    const year = new Date().getFullYear();

    return <div className="footed">
        © {year}, Mushroom Proxy
    </div>
}

export default Footed;