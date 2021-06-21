import React from 'react';

export class Home extends React.Component {
    componentDidMount() {

    }

    haha = () => {
        console.log(999,this)
        this.props.history.push('/terms');
    }

    render() {
        return <>
            <span>hahahaha</span>
            <button onClick={this.haha}>点我啊</button>
        </>;
    }
}

export default Home;