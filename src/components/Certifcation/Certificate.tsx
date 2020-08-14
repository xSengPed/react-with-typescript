import React, { Component } from 'react';
import {Divider, Carousel} from 'antd';
import NSC2 from '../../assets/IMG_0002.jpg';
import NSC1 from '../../assets/IMG_0005.jpg';
import './cert.css'
class Certificate extends Component {
    render(){
        return(
            <div>
                <div><Divider style={{fontWeight:'bold',fontSize:'28px'}}>Certificate</Divider></div>
                <div className='carousel-flex'>
                <Carousel autoplay className='cert-carousel'>
                    <div ><img src={NSC1} className="img"/></div>
                    <div ><img src={NSC2} className="img"/></div>
                    
                </Carousel>
                </div>
            </div>
        )
    }
}

export default Certificate