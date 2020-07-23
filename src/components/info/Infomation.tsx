import React, { Component } from 'react'
import axios from 'axios'
import './Infomation.css'
import { Avatar, Result } from 'antd'
import { array } from '@amcharts/amcharts4/core';

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
                    <div className='profile-picture-caption'><h1>{this.state.name}</h1></div>
                </div>

            </div>
        );
    }
}
export default Information;