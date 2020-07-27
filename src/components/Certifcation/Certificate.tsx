import React, { Component } from 'react';
import {Divider, Carousel} from 'antd'
import './cert.css'
class Certificate extends Component {
    render(){
        return(
            <div>
                <div><Divider style={{fontWeight:'bold',fontSize:'28px'}}>Certificate</Divider></div>
                <div className='carousel-flex'>
                <Carousel autoplay className='cert-carousel'>
                    <div>Coming Soon!</div>
                    <div>Coming Soon!</div>
                    <div>Coming Soon!</div>
                    <div>Coming Soon!</div>
                </Carousel>
                </div>
            </div>
        )
    }
}

export default Certificate