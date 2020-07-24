import React, { Component } from 'react'
import axios from 'axios'
import './Infomation.css'
import { Avatar, Divider, Row, Col } from 'antd'


// https://api.github.com/users/KalimaPz
// if you create props you must initialize props interface

interface apiDataState {
    name: string,
    image_uri: string,
    id: number,
}

class Information extends Component<{}, apiDataState>{

    state: apiDataState = {
        name: '',
        image_uri: '',
        id: 0,
    }

    fetchData = async () => {
        let result: any = await axios.get(`https://api.github.com/users/KalimaPz`)
        let { name, avatar_url, id }: any = result.data
        this.setState({
            name: name,
            image_uri: avatar_url,
            id: id,
        })
    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <div className='profile-picture'>
                    <Avatar className='avatar' src={this.state.image_uri} size={200}></Avatar>
                    <div className='profile-picture-caption'>
                        <h1 id='name-univ-and-faculty'><b>{this.state.name}</b></h1>
                    </div>
                    <div className='profile-picture-caption'>
                        <h2 id='name-univ-and-faculty'>
                            <p>Faculty of Engineering (Computer Engineering)</p>
                            <p>Prince of Songkhla University (Phuket Campus)</p>
                        </h2>
                    </div>

                </div>
                <div>
                    <div><Divider>PROFILE</Divider></div>
                    <div className='info-area'>
                        <div className='highlight about content'>
                            <p className='header-centered'><h2><b>ALL ABOUT MYSELF</b></h2></p>
                            <p>Date of Birth : 1 January 1997</p>
                            <p>Major Branch : Information Engineer</p>
                            <p>Minor Branch : Computer System Design (CSD)</p>
                            <p>Lifetyle : Music , Gaming , Reading , Coding</p>
                            <p>Interesting : Database , Web Dev , Mobile App , Object-Oreinted Programing</p>
                        </div>
                        <div className='highlight bio content'>
                            <p className='header-centered'><h2><b>MY STORY</b></h2></p>
                            <p>
                                Hi!  You can call me Phone. I was born in 1997. I'm newbie developer that interesting about moblie appication and web application. I've been lived in Phuket for 5 years.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Information;