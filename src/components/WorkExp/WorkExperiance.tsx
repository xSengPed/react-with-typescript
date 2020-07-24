import React , {Component}from 'react';
import './WorkExperiance.css'
import {Card} from 'antd'

interface WorkedProps {
    title: string, 
    status : string,
    position: string,
    period: string,
}

class WorkExperiance extends Component {
    render(){
        return(
        <div>
            <div style={{textAlign:'center'}}><h1><b>WORKING EXPERIANCE</b></h1></div>
            <div className='card-area'>
                <WorkingCard title='Weserve Lifestyle Co.' status='Internship' position='Front-End Developer' period='25 May - July 2020'/>
                <WorkingCard title='Collage of Computing' status='Former' position='OOP Teach Assistant' period='Semester 2 / 2020'/>
            </div>
        </div>);
    }
}

class WorkingCard extends Component <{},WorkedProps>{
    props:WorkedProps = {
        title : '',
        status : '',
        position :'',
        period : '',
    }
    render(){
        let {title,status,position,period} = this.props;
        return(
            <div className='card'>
                <Card id='title' title={title} >
                    <div className='card-text-centered'>
                        <p id='status'>{status}</p>
                        <p id='position'>{position}</p>
                        <p id='period'>{period}</p>
                    </div>
                    
                </Card>
            </div>
        );
    }
}

export default WorkExperiance;
