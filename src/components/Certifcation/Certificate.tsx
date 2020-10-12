import React, { Component } from 'react';
import {Divider, Carousel} from 'antd';

import './cert.css'
class Certificate extends Component {

    render(){
        const cert = [
            'https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0002.jpg?alt=media&token=b6fbda73-719a-4b12-9503-db976eceaeeb'
            ,
            'https://firebasestorage.googleapis.com/v0/b/bulma-project.appspot.com/o/IMG_0005.jpg?alt=media&token=105e03bb-2f70-4265-b3ed-261418fa8fc2'
        ];
        return(
            <div>
                <div><Divider style={{fontWeight:'bold',fontSize:'28px'}}>Certificate</Divider></div>
                <div className='carousel-flex'>
                <Carousel autoplay className='cert-carousel'>
                    <div ><img alt="Not Found" src={cert[0]} className="img"/></div>
                    <div ><img alt="Not Found" src={cert[1]} className="img"/></div>
                </Carousel>
                </div>
            </div>
        )
    }
}

export default Certificate