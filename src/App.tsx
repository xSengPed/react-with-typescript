import React, {Component} from 'react'
import GraphView from './components/graphview/GraphView';
import {Col,Row} from 'antd'
import './App.css'
import Information from './components/info/Infomation';
import WorkExperiance from './components/WorkExp/WorkExperiance'
import Repositories from './components/GitRepositories/Repositories';
class App extends Component {
    render() {
        return(
            <div className='App'>
                <Information/>
                <GraphView/> 
                <WorkExperiance/>
                <Repositories/>
            </div>
        )
    }
}

export default App;