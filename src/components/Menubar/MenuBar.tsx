import React, { Component } from 'react'
import './MenuBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
class MenuBar extends Component {
    render(){
        return(
            <div className='menu-frame'>
                <div className='menu-items'>
                    <p className='item' ><FontAwesomeIcon size='2x' icon={faGithub}/></p>
                    <p className='item' ><FontAwesomeIcon size='2x' icon={faInstagram}/></p>
                </div>
            </div>
        );
    }
}

export default MenuBar