import React, {Component} from 'react'
import GraphView from './components/graphview/GraphView';
import {Col,Row} from 'antd'
import './App.css'
import Information from './components/info/Infomation';
class App extends Component {
    render() {
        return(
            <div className='App'>
                <Information/>
                <div>My Profession</div>
                <GraphView/>
            </div>
        )
    }
}

export default App;