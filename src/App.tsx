import React, {Component} from 'react'
import GraphView from './components/graphview/GraphView';
import './App.css'
import Information from './components/info/Infomation';
import WorkExperiance from './components/WorkExp/WorkExperiance'
import Repositories from './components/GitRepositories/Repositories';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import MenuBar from './components/Menubar/MenuBar';
AOS.init()

class App extends Component {
    render() {
        return(
            <div className='App'>
                <div><Information/></div>
                <div data-aos='zoom-out' data-aos-duration='2000'><GraphView/> </div>
                <div><WorkExperiance/></div>
                <Repositories/>
            </div>
        )
    }
}

export default App;